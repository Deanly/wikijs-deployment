# Overview
This is a wiki.2 deployment setup for use as a personal note.

And this configuration solves the following problems.
- Limit the external exposure of the application by configuring a proxy using the nginx server.
- Force modification of client side access path of plantuml, which has not been implemented yet.
- Force consolidation of the service path of the plantuml server.


# Settings
## Local
Try running this deployment version simply locally.
```
$ mkdir ./local-test/backup
$ mkdir ./local-test/logs
$ mkdir ./local-test/pgdata

$ cd ./local-test
$ docker-compose up -d

$ docker-compose logs -f
```

## Production 
In all files, refer to the `volumes` list entry below, define it for your environment and rewrite all paths in `${..}`.
```
/docker-compose.yml
/nginx.conf
```

If you have modified all `${..}` in the above files, distribute it through the command below.
```
$ openssl rand -base64 32 > ${file.db.secret}
$ docker-compose up -d
```

### volumes
| 용도 | Volume | hostname | 타입 | 바인딩 |
|:---:|:---:|:---:|:---:|:---:|
| nginx pub | ${dir.nginx.public} | web | dir | /var/www/public |
| nginx log | ${dir.nginx.log} | web | dir | /usr/local/nginx/log |
| nginx conf | ${file.nginx.conf} | web | file(ro) | /etc/nginx/nginx.conf |
| nginx cert | ${dir.certbot.main} | web | dir | /etc/nginx/ssl |
| nginx certbot dir | ${dir.certbot.public} | web | dir | /var/www/certbot | 
| nginx crontab list | ${file.crontab.list} | web | file(ro) | /etc/cron.d/root:ro |
| logrotate conf | ${file.logrotate.nginx} | web | file(ro | /etc/logrotate.d/nginx |
| certbot conf | ${dir.certbot.main} | certbot | dir | /etc/letsencrypt |
| certbot log | ${dir.certbot.logs} | certbot | dir | /var/log/letsencrypt |
| certbot public dir | ${dir.certbot.public} | cerbot | dir | /var/www/certbot |
| db secert | ${file.db.secret} | db | file(ro) | /etc/wiki/.db-secret |
| db data | ${dir.db.data} | db | dir | /var/lib/postgresql/data |
| wiki db secret | ${file.db.secret} | wiki | file(ro) | /etc/wiki/.db-secret |
| wiki github secret | ${file.storage.github.pem} | wiki | file(ro) | /etc/wiki/github.pem |
| wiki db backup | ${dir.storage.backup} | wiki | dir | /etc/wiki/backup |
| update companion | /var/run/docker.sock | wiki-update-companion | file(ro) | /var/run/docker.sock |

## App configurations
It is set in the admin page of wiki.2.

1. Stroage > Local File System ([/a/storage](https://docs.requarks.io/storage))
    * path: `/etc/wiki/backup`
1. Storage > Git ([/a/storage](https://docs.requarks.io/storage/git))
    * SSH Private Key Path: `/etc/wiki/github.pem`
1. Rendering > Kroki ([/a/rendering](https://docs.requarks.io/en/rendering))
    * Kroki Server: http://kroki:8000
1. Rendering > PlantUML ([/a/rendering](https://docs.requarks.io/en/rendering))
    * PlantUML Server: [https://${your.domain.com}/plantuml](https://plantuml.requarks.io)
1. favicon
    * Create a favicon at [https://realfavicongenerator.net](https://realfavicongenerator.net)
    * Location the files to `${dir.nginx.public}/favicon_package`


# Management

## Version update
First, go to your `docker-compose.yml` file location.
```sh
# Get the latest image
$ docker-compose pull

# Replace only the container using the old version image
$ docker-compose up --detach

# Remove all unnecessary images
$ docker image prune -f
```

## TLS update

Certificate renewal.
```sh
docker run -it --rm --name certbot -v '${dir.certbot.main}:/etc/letsencrypt' -v '${dir.certbot.logs}:/var/log/letsencrypt' -v '${dir.certbot.public}:/var/www/certbot' certbot/certbot renew --server https://acme-v02.api.letsencrypt.org/directory --cert-name ${your.domain.com}
```
(Refer to the `volumes` list )

Check remaining certificate expiration date.
```sh
docker run -it --rm --name certbot -v '${dir.certbot.main}:/etc/letsencrypt' -v '${dir.certbot.logs}:/var/log/letsencrypt' -v '${dir.certbot.public}:/var/www/certbot' certbot/certbot certificates
```



# Hello! 
If it was helpful, Could you  
<a href="https://www.buymeacoffee.com/deanly" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/lato-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>