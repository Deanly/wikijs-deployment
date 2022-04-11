#

1. If have not registered domain in `Let's Encrypt`, first refer to `./init` to deploy.

1. Deploy
    ```bash
    $ docker-compose up -d
    ```

1. Grant permission to file for logstate.
    ```bash
    $ sudo chown root:root /home/ec2-user/deploy/logrotate-nginx.conf
    $ sudo chown root:root -R /home/ec2-user/service/logs
    ```