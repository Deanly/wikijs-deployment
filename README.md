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
2. Storage(보관소) > Git
    * SSH Private Key Path : `/etc/wiki/github.pem`