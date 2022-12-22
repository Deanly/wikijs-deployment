#!/bin/sh
docker run -it --rm --name certbot -v '/home/ec2-user/service/certbot/conf:/etc/letsencrypt' -v '/home/ec2-user/service/certbot/logs:/var/log/letsencrypt' -v '/home/ec2-user/service/certbot/data:/var/www/certbot' certbot/certbot renew
docker exec deploy_web_1 service nginx reload