# 
When first deploying the server, it is used to set the certificate.

## start

1. Modify all phrase that `${..}` in two files.  
    - docker-compose.yml
    - nginx.conf

1. Deploy
    ```bash
    $ docker-compose up
    ...
    certbot_1     | Account registered.
    certbot_1     | Requesting a certificate for my.domain.com
    certbot_1     | 
    certbot_1     | Successfully received certificate.
    certbot_1     | Certificate is saved at: /etc/letsencrypt/live/my.domain.com/fullchain.pem
    certbot_1     | Key is saved at:         /etc/letsencrypt/live/my.domain.com/privkey.pem
    certbot_1     | This certificate expires on 0000-00-00.
    certbot_1     | These files will be updated when the certificate renews.
    certbot_1     | NEXT STEPS:
    certbot_1     | - The certificate will need to be renewed before it expires. Certbot can automatically renew the certificate in the background, but you may need to take steps to enable that functionality. See https://certbot.org/renewal-setup for instructions.
    certbot_1     | Saving debug log to /var/log/letsencrypt/letsencrypt.log
    certbot_1     | 
    certbot_1     | - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    certbot_1     | If you like Certbot, please consider supporting our work by:
    certbot_1     |  * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate  
    certbot_1     |  * Donating to EFF:                    https://eff.org/donate-le  
    certbot_1     | - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    ...

    Ctrl+C

    $ docker-compose down
    ```

1. Grant permission to file for logstate.
    ```bash
    $ sudo chown root:root /home/ec2-user/deploy/logrotate-nginx.conf
    $ sudo chown root:root -R /home/ec2-user/service/logs
    ```