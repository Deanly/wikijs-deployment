## Certificates Crontab

### Check shell script
1. Grant execute permission.
    ```sh
    chmod +x ./certbot-update-certificates.sh
    ```

### Add cron to the scheduler list
1. Open cron editor on `ec2`.
    ```sh
    crontab -e
    ```
1. Copy and paste, the contents of file `local-crontab.list`.
    ```
    0 1 * * * /home/ec2-user/local/certbot-update-certificates.sh
    ```
1. Save and exit the editor.
    ```
    :wq
    ```

### Run crontab
1. Restart the crontab.  
   After editing the crontab list, need to restart the cron service.
    ```sh
    sudo systemctl restart crond.service
    ```
1. Check the crontab status.
    ```sh
    sudo systemctl status crond.service
    ```