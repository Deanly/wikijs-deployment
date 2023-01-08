const http = require('http');
const httpProxy = require('http-proxy');
const jose = require('node-jose');
const cookie = require('cookie');
const axios = require('axios');
const fs = require('fs');

const proxy = httpProxy.createProxyServer({ target: { host: 'localhost', port: 3030 }});

let keystore;
let verifier;

let htmlLogin;
fs.readFile('./html/set-token.html', (error, data) => {
  htmlLogin = data.toString('utf-8');
});

async function getJwks() {
  const jwk = (await axios.get('http://localhost:80/.well-known/jwk.json')).data;
  return { keys: [ jwk ] };
}

async function getKeyStore() {
  return await jose.JWK.asKeyStore(await getJwks());
}

async function verify(token) {
  if (!jose.JWK.isKeyStore(keystore)) {
    keystore = await getKeyStore();
    verifier = jose.JWS.createVerify(keystore);
  }

  return await verifier.verify(token);
}

const server = http.createServer(async (req, res) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.jwt;

  if (req.url.startsWith('/login')) {
    res.writeHead(401, { 'Content-Type': 'text/html' })
    res.end(fs.readFileSync('./html/set-token.html').toString('utf-8'));
    // res.end(htmlLogin);

    return;
  }

  if (req.url.startsWith('/logout')) {
    res.statusCode = 301;
    res.setHeader('Set-Cookie', 'jwt=;');
    res.setHeader('Location', '/login');
    res.end('');

    return;
  }

  if (!token) {
    res.statusCode = 401;
    res.end('Unauthorized');

    return;
  }

  try {
    await verify(token);
    proxy.web(req, res);

  } catch (error) {
    console.error(error);
    res.statusCode = 401;
    res.setHeader('Set-Cookie', 'jwt=;');
    res.end('Unauthorized');

  }

});

server.on('upgrade', async (req, ws, head) => {
  proxy.ws(req, ws, head);
})

proxy.on('error', (err, req, res) => {
  res.statusCode = 500;
  res.end(`Internal Server Error - ${err.message}`);
})

process.on('uncaughtException', (error) => {
  console.error(error);
});

server.listen(3000);
