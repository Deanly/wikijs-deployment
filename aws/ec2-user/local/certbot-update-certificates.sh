#!/bin/sh
docker run -it --rm --name certbot -v '/home/ec2-user/wiki/certbot/conf:/etc/letsencrypt' -v '/home/ec2-user/wiki/certbot/logs:/var/log/letsencrypt' -v '/home/ec2-user/wiki/certbot/data:/var/www/certbot' certbot/certbot renew --non-interactive
docker exec deploy_web_1 service nginx reload