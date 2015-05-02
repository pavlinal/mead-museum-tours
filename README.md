# Mead Art Museum

As the [Mead Art Museum](https://www.amherst.edu/museums/mead) at Amherst College develops a suite of community and school resources, one of the thematic focal points is on art and music - works that include representations of instruments or music making, or objects that themselves have audible components that are not readily accessible to the viewer. This is where digital technology comes in. Tho goal of this project is to develop user-friendly, and visually-compelling multi-device web application compatible with both Android and iOS devices that will provide supplementary audio, video and written content for a selection of objects in the museum.

## Table of contents

* [Setting up the Testing Environment](#setting-up-the-testing-environment)
* [Running the Web Application](#running-the-web-application)
* [Creating and Populating the Database](#creating-and-populating-the-database)
* [Folder Structure](#folder-structure)
* [The Implementation](#the-implementation)

## Setting up the Testing Environment

To setup a programming and testing environment identical to those your fellow programmers working on this project are using you can run Vagrant on top of VirtualBox. VirtualBox allows you to set up a virtual machine on your local machine and Vagrant helps with easy configuration of the virtual machine.

First, visit the [VirtualBox downloads page](https://www.virtualbox.org/wiki/Downloads) to download and install the version of VirtualBox for your platform.  Next, download and install [Vagrant](https://www.vagrantup.com/downloads.html) for your platform. To bootstrap the virtual machine you will need to use the [terminal](http://guides.macrumors.com/Terminal) (if you are on Linux or Mac OS X) or the [command prompt](http://www.cs.princeton.edu/courses/archive/spr05/cos126/cmd-prompt.html) (if you are running Windows).

To download the Vagrantfile, a configuration file for the virtual machine used for this project, you should clone the *mead-museum-tours* repository. Open the terminal window on our machine, navigate to a place where you would like to keep all the application files and then type the following command into the prompt:

	$ git clone https://github.com/plejskova/mead-museum-tours.git

This will create a local copy of the *mead-museum-tours* repository on your machine. For information on installing and using git visit the [GitHub help page](https://help.github.com/articles/set-up-git/).

To bootup the virtual machine system, navigate into the *mead-museum-tours* folder (which contains the *Vagrantfile*) in your terminal window:

	$ cd mead-museum-tours

The bootup process will download all the necessary software, so make sure that you are connected to a reliable network before proceeding. In the directory containing the *Vagrantfile* run this command:

	$ vagrant up

There will be a lot of output on the screen telling you what software is being downloaded and installed. The bootup process might take a while, so at this point you can take a break.

Once the bootup is complete, you will need to connect to the virtual machine. On Mac and Linux this is easy because both systems have pre-installed software to do this. In your terminal window make sure that you are in the folder containing the *Vagrantfile* and type:

	$ vagrant ssh

On Windows you will need to install the [PuTTy](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) SSH program and the PuTTYgen utility. See this [video](https://www.youtube.com/watch?v=9CZphjhQxIQ&feature=youtu.be) for a tutorial on how to use PuTTY. To configure PuTTY you will need to convert the private key provided by Vagrant into a PuTTY compatible format using the PuTTYgen utility. Follow this [tutorial](https://github.com/Varying-Vagrant-Vagrants/VVV/wiki/Connect-to-Your-Vagrant-Virtual-Machine-with-PuTTY) to do this.

Now you can access the mead-museum-tour files by going to */vagrant*:

	$ cd /vagrant
	$ ls

To log out of the virtual machine press control-D or type:

	$ exit

in your terminal window. This will close your SSH session. To halt the virtual machine type:

	$ vagrant halt

This will shutdown the virtual machine and release an resources that were being use. If you want to bring the virtual machine up again just type:

	$ vagrant up
	$ vagrant ssh

## Running the Web Application

Before you run the application, you will need to install all the necessary modules. To do that, navigate into the *mead-museum-tours* folder (which contains the *package.json* file) in your terminal and run the following command:
	
	$ npm install

This will create a new folder called *node_modules* which contains all the libraries needed to run the application. As a result, this folder is quite large. Once the modules are installed, you should be able to run the application by typing:

	$ npm start
	> mmtours@0.0.1 start /vagrant/mead-museum-tours
	> node ./bin/www

If this command does not work, you can also try:

	$ node ./bin/www

Then navigate to http://localhost:3000/ in your favorite browser to see the application.


## Creating and Populating the Database

The *mead-museum-tours* application uses a MYSQL database to store the information about the tours and the objects in the museum. When testing the application you can [populate the database from an sql file](#populating-the-database-from-an-sql-file) that we have provided. If you need to modify or extend the database you will need to [populate it manually](#manually-populating-the-database).

### Log into MYSQL

To log into MYSQL run the following command in the terminal window of your Vagrant virtual machine:

	$ mysql -u root -pmarylyon

### Populating the database from an sql file

Once you are logged into MYSQL, you will need to create a *meadmuseum* database. In the MYSQL prompt type:

	mysql> create database meadmuseum;
	Query OK, 1 row affected (0.00 sec)
	mysql> exit;
	Bye

Once you have exited the MYSQL prompt, navigate into the *db* folder and run the following command:
	
	$ cd db
	$ mysql -u root -pmarylyon meadmuseum < meadmuseum.sql

Where *meadmuseum.sql* is the name of the sql backup file you want to use to populate the database.

### Manually populating the database

Once you are logged into MYSQL, you will need to create a *meadmuseum* database, select it and access it:

	mysql> create database meadmuseum;
	mysql> use meadmuseum;

#### View content of a table

	select * from objects;

or 

	select * from tours;

don't forget the semi-colon at the end of every SQL command!

#### To add an element to a table

The INSERT INTO statement is used to insert new records in a table. It is possible to write the INSERT INTO statement in two forms. The first form does not specify the column names where the data will be inserted, only their values:

	INSERT INTO table_name VALUES (value1,value2,value3,...);

The second form specifies both the column names and the values to be inserted:

	INSERT INTO table_name (column1,column2,column3,...) VALUES (value1,value2,value3,...);

We can use the second form first, but in the case of a syntax error, switch back to the first method.

To add an object into the object table, the command would be as follows:

	INSERT INTO objects (id, title , makers, culture, location, date, materials, measurements, asc_num , credit_line , desc , room, pic, sound, video, tour) VALUES ( [leave blank, this value is automatically generated], 'title' , 'makers', 'culture', 'location', date ....)

note that fields that are strings (text) need to be surrounded by single quotation marks. This does not apply to numeric fields.

To add a new tour into the tour table, the command would be as follows:

	INSERT INTO tour (id, name, desc) VALUES ( [leave blank, this value is automatically generated], 'name', 'desc')

#### To remove an element from a table

The DELETE statement is used to delete records in a table, using a conditional.

	DELETE FROM table_name WHERE some_column=some_value;

For example, if you wanted to delete a particular object, you can delete it with its id number:

	DELETE FROM objects WHERE id=1;

#### To update an element

The UPDATE statement is used to update existing records in a table. The WHERE clause specifies which record or records that should be updated. If you omit the WHERE clause, all records will be updated!
	
	UPDATE table_name SET column1=value1,column2=value2,... WHERE some_column=some_value;

For example, if you wanted to place all objects with English artists into another tour:

	UPDATE objects SET tour=5 WHERE culture=England;

This is assuming that there is already a tour with the id number of 5 located in the tour table!

## Folder Structure

* __/bin__ - the startup scripts
* __/db__ - the database files
* __/lib/db__
    * __db.js__ - the database functions
* __/public__
    * __/css__ - the Bootstrap css files
    * __/img__ - the images
    * __/js__ - the Bootstrap javascript and jquery files
    * __/sound__ - the sounds
* __/routes__
    * __main.js__ - the routes to static pages (index, about, feedback)
    * __objects.js__ - the routes to object related pages (object, search)
    * __tours.js__ - the routes to tour related pages (tours, tourdetail)
* __/views__ - the EJS code for each of the application pages
    * __/partials__ - the EJS code for the elements that repeat on all the application pages
* __app.js__ - the main application file
* __package.json__ - the metadata and list of dependencies
* __Vagrantfile__ - the configuration file for the virtual machine
* __provision.sh__ - the configuration file for the virtual machine 
* __LICENSE.md__
* __README.md__

## The Implementation
