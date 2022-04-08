
## List of keys
 - github-key.pem
 - .db-secret 

## Setting the secret key for ssh
```bash
$ sudo chmod 0600 /home/ec2-user/service/keys/my-secret-key.pem
```

## Generate a secret key for db
```bash
$ openssl rand -base64 32 > /home/ec2-user/service/keys/.db-secret
```