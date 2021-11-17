# wiki deployment log

## local
바로 실행 가능
```
$ mkdir ./local-test/backup
$ mkdir ./local-test/logs
$ mkdir ./local-test/pgdata

$ cd ./local-test
$ docker-compose up -d

$ docker-compose logs -f
```

## real
파일에서 `${..}`형식에 알맞은 데이터를 모두 기입
```
/docker-compose.yml
/nginx.conf
```
적절한 `path` 설정후 실행
```
$ openssl rand -base64 32 > ${file.db.secret}
$ docker-compose up -d
```

### wiki setting
1. Stroage(보관소) > Local File System
    * path: `/etc/wiki/backup`
1. Storage(보관소) > Git
    * SSH Private Key Path: `/etc/wiki/github.pem`
1. Parser(파서) > Kroki
    * Kroki Server: http://kroki:8000
1. Parser(파서) > PlantUML
    * PlantUML Server: https://${yser.domain.com}/plantuml
1. favicon
    * https://realfavicongenerator.net 에서 favicon 생성
    * `${dir.nginx.public}/favicon_package` 에 위치시키기

### volumes
| 용도 | Volume | hostname | 타입 | 바인딩 |
|:---:|:---:|:---:|:---:|:---:|
| nginx public | ${dir.nginx.public} | web | dir | /var/www/public |
| nginx 로그 | ${dir.nginx.log} | web | dir | /usr/local/nginx/log |
| nginx 설정 | ${file.nginx.conf} | web | file(ro) | /etc/nginx/nginx.conf |
| nginx 인증서 | ${dir.certbot.main} | web | dir | /etc/nginx/ssl |
| nginx certbot public | ${dir.certbot.public} | web | dir | /var/www/certbot | 
| nginx crontab list | ${file.crontab.list} | web | file(ro) | /etc/cron.d/root:ro |
| logrotate 설정 | ${file.logrotate.nginx} | web | file(ro | /etc/logrotate.d/nginx |
| certbot 설정 | ${dir.certbot.main} | certbot | dir | /etc/letsencrypt |
| certbot 로그 | ${dir.certbot.logs} | certbot | dir | /var/log/letsencrypt |
| certbot 인증 public | ${dir.certbot.public} | cerbot | dir | /var/www/certbot |
| db secert | ${file.db.secret} | db | file(ro) | /etc/wiki/.db-secret |
| db data | ${dir.db.data} | db | dir | /var/lib/postgresql/data |
| wiki db secret | ${file.db.secret} | wiki | file(ro) | /etc/wiki/.db-secret |
| wiki github secret | ${file.storage.github.pem} | wiki | file(ro) | /etc/wiki/github.pem |
| wiki db backup | ${dir.storage.backup} | wiki | dir | /etc/wiki/backup |
| update companion | /var/run/docker.sock | wiki-update-companion | file(ro) | /var/run/docker.sock |