### Mead Art Museum

#### Instructions:  

##### To start vagrant
To start vagrant cd into the *mead-museum-tours* folder. The type

	vagrant up

Vagrant will start. It will likely take a few minutes. Once vagrant is started type:

	vagrant ssh

Now you can access the files by going to */vagrant*.

##### To set up the database
Connect to mysql and create a *meadmuseum* database:

	mysql -u root -pmarylyon
	mysql> create database meadmuseum;
        Query OK, 1 row affected (0.00 sec)
	mysql> exit;
	Bye

On your terminal, cd into the */db* folder. Then run the following:

	mysql -u root -pmarylyon meadmuseum < meadmuseum.sql


##### To run the application
To run the application, first make sure to install the necessary modules. To do that cd into the *mead-museum-tours* folder in your terminal and then execute the following command:
	
	npm install

Once the modules are installed, you should be able to run the application by typing:

	npm start
	> mmtours@0.0.1 start /vagrant/mead-museum-tours
	> node ./bin/www

If this command does not work, you can also use:

	node ./bin/www

