
# private note wiki
Amazon Lightsail  
## spec
> OS: Amazon Linux 2
> Prise: $10 USD/mo  
> Memory: 2GB  
> Processing: 1 vCPU  
> Storage: 60GB SSD  
> Transfer: 3TB  

## pre-preparation
1. Install the `Docker`
    ```bash
    $ sudo yum update -y
    $ sudo amazon-linux-extras install docker
    $ sudo yum install docker
    $ sudo usermod -a -G docker ec2-user
    $ sudo service docker start
    $ sudo reboot
    ...
    $ docker ps
    ```

1. Install the `Docker-Compose`
    ```bash
    $ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose  
    $ sudo chmod +x /usr/local/bin/docker-compose
    $ docker-compose --version
    ```
