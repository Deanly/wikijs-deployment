# Overview
This is a deployment setup manualy to contain [WIKI2](https://github.com/Requarks/wiki) and [VSCode](https://github.com/gitpod-io/openvscode-server) for using as personal note.

Solves the following issues for WIKI2.
- Using the nginx proxy server to limit unnecessary external exposure of application services under.
- Complementing not yet implemented [features](https://github.com/Requarks/wiki/blob/2.5.274/client/components/editor/editor-markdown.vue#L342), improving the security. example, out of control to request unwanted external hosts in PlantUML.

Added The VSCode Cloud Service of [gitpod-io](https://github.com/gitpod-io). VSCode uses WIKI2's JWT/JWK as   authentication, enabling access control from a private server safely.  
![image](data:image/png;base64,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f7YH06ZNswMOOMBUhyOOOMKuv/5622677WzzzTe3xx9/3Gfz0UcfWY8ePWzTTTe1P/zhD/bhhx/ac889ZwMGDPDX58yZY506dbLFixf784MOOsi+/PLLWvNTookTJ9rvfvc7u+uuu+yJJ56wbNrrM3f/0uscxukzzEva7dNPP9223357O/roo+2NN97wyTK1Qxek/b7sssuse/futtFGG9mIESN8ev5BAAIQiAsBhN249BT1hECFEpCwt++++1Zp/TbbbGOTJk3ycZMnT7aZM2d6YXL69Om24YYb+viTTjrJhg0bZq+99ppJwJOWNJcgoXHgwIF+6v9Xv/qVSRh89dVX7ZVXXvHmBSNHjvTZyRxCAvEHH3xg/fr18+VIkFT9li9fbk8//bR98cUXvo7ffPONvffee9amTZta81Omumevvfay//znP7Zw4ULLpr26r3qdFReGMC/xkuAtIffMM8+0K664wifJ1A5dWLBggT3wwAP24IMP2qOPPmpq99KlS8Ns+YQABCAQeQIIu5HvIioIgcomEGo50ylIy/jmm2/aL7/8Yh9//LEdeuihXpsqIVGCsQTTr776yguZMoHYZJNNvACZnkd4/NZbb5kEY/3NmDHDR8uM4MADD7SLL77YNt544zCp/fGPf7RGjRr5aypX5T/77LNeaJS5gcp+4YUXTDa3O+ywgxeOJYAPGjTI9Km0ffr0qTU/XXj//fetffv21rhx41S6+tqrhLXVOZXJ/x1svfXWNmXKFDv33HO9MH7PPffU2o4ffvjB33XUUUdZy5Ytbdttt7V27drZZ599Vj1bziEAAQhElgDCbmS7hopBAALLli2zuXPnWseOHavAkCAom9bx48d7AUxaUAmT0vD27NnTC2NKo/v117p1a5PNaqbQvHlz23nnnf2fBDqF//73v3bVVVeZtJ26PwxNmjTxhxJsJdAuWrTIGjRo4AVgXVCc0itOgq/qNG/evJQgHQrjteWn+EzCfX3t1X211VnX0sMWW2zhtd2tWrXyAq/MJepqh+4N263jsO06JkAAAhCIAwGE3Tj0EnWEQIUSeOaZZ2zPPfdMtV72sLKfVZAwqSl12csqzcMPP2zrrruuyeSgW7duXmvZv39/O/nkk71WUja8mYLsUJVGf6FQLU2q7Fplmyt71dqChGPdL/MGBQmz0n6uvfbavn7jxo3z9roS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79/fu6DRW74EYQnJH374oR144IFegO3SpYsXmiXQXnbZZT6vTz75xLdXZZ955pl2880329Zbb23HHnusrb322vbnP/85Vx5ZpU8XsrO6gUSxIcBDMDZdVfSKMs6LjrhsBTDOy4a+ZAUzfkuGuuQF5TN+C7ZA7aijjrJtttnGLrjgAhs2bJgtWrTItCuOBN2ddtrJLr74YmvUqJF9/vnn1qFDB79bzgsvvGDbb7+9B3XVVVfZcccdZxtttJHNmDHDdtllFx9/2mmn2VprreXtu9q3b+/9MWpBw6effmobb7yxSdur8n7961/b5Zdf7u956KGH/E48EoILHQSZQVRoqtHJj/6NTl+UsyZ8D8pJv/hl07/FZ1zOEujfctIvftn59G9BzBjUNGlmJ0+e7Fv58MMP25FHHumPr732WpOZg8wSZM4g5+FffvmlyZPCVltt5dPo3+DBg/2uOitXrrQddtghFb/pppt6/4vPPvus7bjjjn6rSV2UUNymTRufTgKvtLry3ai/k08+2WuJU5lwAAEIQAACEIAABCBQkQQKJuzus88+9v777/sFBzJD2HXXXU2CqzSuL7/8sjdLkA3uSSedZBtssIGts846Nn/+/BT0Bx54wJo2bWqy41qwYEEqXnnutttutskmm9hnn32WipcJhHbeUdC2k8OHD/fnipMwLa0xAQIQgAAEIAABCECgsgkUTNiVaYHsa2V2IA1uGCT0SvMq04U//OEP3rxhtdVWMwnHd9xxhzcJ0IrcSy65xAvAir/tttu8oPzTTz/ZU0895RelSaur/dTDhWz33XefrVixwhez5557mkwXJGRrj/Wzzjor5dYmrAefEIAABCAAgUojoOdmtkEmenqGEiCQNAIFE3YFRqYM8sAQmjBIqJXgKVveHj162CGHHOLtaxV/9tln27hx47zGVgvKRowY4dkOHDjQbrrpJr/QTGYOffv2tc0339yv1pVt7n777ecXrEkTLD+7ClqcJq2wbHglVL/xxhteePYX+QcBCEAAAhCoUAJaN6PF3tmEJ554ooqyKpt7MqV599137bHHHst0iTgIlIVAwRao1VV7mSvINOE3v/mNSdANg8wctGBN9rfpQfa8H3zwgbVt29a7Jku/9s0339h3333n3ZKlx+tYbs2WLFlSxRa4eppVPc/HMHpVy+T+0hGgf0vHOsol8T2Icu+set0qqX9lBnjXXXd5pVF95B5//HE/s/rggw/Wl7TO6/fff79JcL7zzjvrTFesi5XUv8ViGOV88+nf/5c8i9iy1q1bex+46YKuitN5dUFX8doCWG7L5IO3egj971aP17m8NaQvesuUhjgIxIWAfE63aNEiq+qWS5OimZt0X9iqrOotO3oCBCCQmcA111xjo0aNSl3UsWY65U7z0EMP9c9LzX6G61ckhOrZplnOc845x9+ncTZgwAA/oykTwqeffjoVf/zxx3uFkGZNZQ4YBrn91Eyr8rriiivC6CqfUiYdfPDB1q5dOz9LK+WTwtSpU/2Mq5RWF154od/yWfE33nijX6Mjf/kTJ070a2bOP/98e/TRR73LUaUhQKDcBEoi7Ja7kZQPgTgSkMu91157Lauqy3xIpj1RCKq3/GQTIACBzARkWnDLLbekLo4dO9ZvuiTvRX369PGmeFLeaG2K7Gi125wESY3zV155xV566SW75557vFcj+beXwCkTQK1j+etf/2r//e9/7cUXX/RrY+TzXkGekP7yl7/YI4884v/+8Y9/mDwnVQ8SmuUdSflqhvW5557zdfjTn/7ky1F+sgPWS64WhKvOs2bN8nWVu1EtPpcv/P33379ovu6r15lzCNRHAGG3PkJch0CZCCxdutRrbqTBka9qPWBk+rPzzjvbtGnTfK20k6CmCmvTpOie7t27e9Of6s2QnbweqPJ1HWpnP/roI+vRo4fJ5Z8WlIa2frXFp+cp7ZQekqp3uEj166+/tsMOO8zP4GhXxblz56bfwjEEKpKAxrP8zkt4leAqr0UacxqLGkfagEnjRRsj6YV3ww039NrYJk2a2IQJE/x6FQm/f/zjH/0siq5r91C56JStrOI1C3r00UenXHQqvda0SHjVonBpiUNtcHonaDF4165d/cyqNozS2JeArVlYLQZXUL4yVVh33XX9DO2JJ57oBd4nn3zS+8VPz49jCESBQF7CrlZr6qFLgAAEikdAY0zaFT3gZNqjB47OJTDqoaIg7czee+9dqyZFpkL9+vVL+acOayshVve+/fbb/uEobyjSBml68oADDvAaHd0nIVqhtvgwPwnO2gxGn6q3FokqjBw50k+byoWg8tUi1SiEq6++OjUNG4X6UIfKIyATA3kR0lb3MjtQkFmCzhcvXuwXZ0trKmFT2tIw6PdgzTXX9Bsrya98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)  

Sorry, but I have no intention of considering automating the deployment. You may need backend development knowledge.  
  

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
| Usage | Volume | Hostname | Type | Binding |
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


