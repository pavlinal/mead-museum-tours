#!/usr/bin/env bash

echo "Provisioning virtual machine..."
sudo apt-get update

### The script to provision the Mead Museum Tours development environment
## Adapted from prof. Richard's CS326 class

# Allows us to install MySQL without entering root password
# Leaves us with blank root password
# export DEBIAN_FRONTEND=noninteractive

# Install development tools
echo "Installing Curl"
sudo apt-get install -q -y curl
# This does a setup to the latest node.
# See https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager
curl -sL https://deb.nodesource.com/setup | sudo bash -
# Then install it:
echo "Installing node.js"
sudo apt-get install -q -y nodejs

# Install Express
echo "Installing Express"
sudo npm install -g express
sudo npm install -g express-generator

# Install git
echo "Installing Git"
sudo apt-get install -q -y git

# Install zip
echo "Installing Zip"
sudo apt-get install -q -y zip

# Link /vagrant to ~/shared
echo "Link /vagrant to ~/shared"
su - vagrant -c "ln -s /vagrant ~/shared"

# Clone emacs setup
# This uses richards emacs setup. Students may want to use their own...
echo "Cloning emacs setup"
su - vagrant -c "rm -rf ~/.emacs.d"
su - vagrant -c "git clone https://github.com/timdrichards/emacs-config.git ~/.emacs.d"

### From http://laravel-recipes.com/recipes/23/provisioning-vagrant-with-a-shell-script
## From Installing Apache

echo "Installing Apache"
sudo apt-get install -y apache2
#if ! [ -L /var/www ]; then
#  rm -rf /var/www
#  ln -fs /vagrant /var/www
#fi
#sudo a2enmod rewrite
#sudo service apache2 restart

## From Installing MySQL

# Skip the prompt for the root password when MySQL is installed
sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password password marylyon'
sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password marylyon'

echo "Installing MySQL"
sudo apt-get install -y mysql-server
# Specify root password
# mysqladmin -u root password mysecretpasswordgoeshere

# cat << EOF | sudo tee -a /etc/mysql/conf.d/default_engine.cnf
# [mysqld]
# default-storage-engine = MyISAM
# EOF

# Restart MySQL to take the configuration change into account
#sudo service mysql restart

echo "You've been provisioned"
