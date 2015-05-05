# Mead Art Museum

As the [Mead Art Museum](https://www.amherst.edu/museums/mead) at Amherst College develops a suite of community and school resources, one of the thematic focal points is on art and music - works that include representations of instruments or music making, or objects that themselves have audible components that are not readily accessible to the viewer. This is where digital technology comes in. The goal of this project is to develop user-friendly, and visually-compelling multi-device web application compatible with both Android and iOS devices that will provide supplementary audio, video and written content for a selection of objects in the museum.

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

Information on the included tables and their respective fields can be found below in the database subsection of the implementation information.
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
To view all instance rows of a table :

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

#### Backing up the database

To backup the database please refer to this [guide](http://www.thegeekstuff.com/2008/09/backup-and-restore-mysql-database-using-mysqldump/).

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

### The Frontend
The frontend of the application uses [Bootstrap](http://getbootstrap.com/) to provide a beautiful, fully responsive design. Following is the organization of the frontend code:
* __/public__
    * __/img__
    	* __/objPics__
    * __/sound__
    * __/css__
    	* __mead-museum-main.css__

The mead-museum-main.css file contains all the customized CSS for the application, it is included for every page of the application. If you wish to make any changes to the style of the application you should do so by altering this file. 

All the object pictures are contained in /public/img/objPics. They should be named to match what is listed in the database as the object's picture filename. 

All the sounds for the objects are contained in /public/sound. The sounds should be in .mp3 format and should be named to match what is listen in the database as the object's sound filename. 

##### Information about customizing the feedback form
The feedback form can be replaced by a customized [Google Form](https://www.google.com/forms/about/). Simply create a Google Form from the Google account where you would like to recieve all the analytics. After you have finished creating your form, click on File/Embed... This will give you a link that looks something like this: 
```html
<iframe src="https://docs.google.com/forms/d/1BowUT1W5furF8_z1p0VSTSgLQevq-WJHA_QYbmlqA94/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> 
````
Take this and replace the 16th line in feedback.ejs (/views/feedback.ejs) with this new link. You only need to do this once! Even if you update or edit the form after you've placed the link into the feedback.ejs file, the link will still point to the most updated version of your Google Form.  



### The Database
The information behind the app is contained within a [MySql](https://www.mysql.com/) database named meadmuseum. There are currently four tables within the database, each containing particular instances as rows, and fields as columns:

If tables are altered, tables can be displayed once in the meadmuseum database by typing
	SHOW TABLES;

* __objects__
* __tour__
* __tour_stop__
* __room__

The *objects* table contains all object information from title to video URL, with each row entry being an individual object.
The *tour* table contains general information for each of the tours, including the auto-generated id, the name of the tour, a description field and a picture url field for the thumbnail to be displayed on the tours page, linking information between the instances in the object table and tour table.
The *tour_order* table contains the order in which the objects appear in their corresponding tours. Columns include the auto-generated id, the id of the object, the id of the tour to which the object belongs to, and the order number in which the object appears within the tour.
The *room* table contains information on the room locations within the museum for possible future implementation of the map feature. It currently contains columns for the auto-generated id, the name of the room, and a description field.

The columns, along with their corresponding datatype, can be displayed with the following command, once logged into MySql:
	SHOW COLUMNS FROM 'tourname';

The initial id number fields are populated automatically as each object is added to the table. String fields are essentially text fields that must be surrounded by single quotations marks, and all else are number fields.

### The Backend

The backend of the application uses the [Express](http://expressjs.com/) framework for Node.js. Following is the organization of the backend code:

* __/bin__
* __/lib/db__
    * __db.js__
* __/routes__
    * __main.js__
    * __objects.js__
    * __tours.js__
* __/views__
    * __/partials__
* __app.js__
* __package.json__

The */bin* directory which contains the *www* file is a standard part of the Express framework. It specifies that the application will run on port 3000 and it allows us to simplify the act of running the application into one simple command: *npm start*.

The *package.json* file contains the metadata for the application as well as the list of the dependencies. To learn more about package.json see this [interactive guide](http://browsenpm.org/package.json).

The *app.js* file is the main file of the application. It specifies the libraries and the routes that are required. It also defines the *public* folder as the folder that will contain all the multimedia as well as the css and js libraries and the *views* folder as the folder that will contain all the code for the frontend of the application.

In the *lib/db* directory is the *db.js* file. In this file, the connection pool is used to establish a connection to the MYSQL database. The *db.js* file also contains functions that access the database and return the data requested.

In the */routes* folder are three *.js* files that call the database functions from the *db.js* file and then pass the data acquired from the database to the frontend. In these files each of the application pages is rendered and if the page is to be dynamic, it is also passed data from the datbase. The *main.js* file contains the routes to the static pages (index, about and feedback). The *objects.js* file contains the routes to object related pages (object and search). And the *tours.js* file contains the routes to tour related pages (tours and tourdetail).

In the */views* folder is all the code for the frontend of the application. We are using a combination of html and [EJS](http://www.embeddedjs.com/) for our frontend code. Each of the .ejs files represents one of the application pages. In the */partials* folder is the code for the elements that repeat on all the application pages - head, footer and the navigation bar. We use EJS to insert these elements into the application pages. We also use EJS to insert JavaScript code into the pages in order to dynamically display the data from the database. Lastly we use jQuery and Ajax to dynamical determine which link a user clicked on, so that we can display details of a tour or an object in response.

#### Further Reading

##### Node.js

* http://www.nodebeginner.org/
* http://www.hongkiat.com/blog/node-js-server-side-javascript/

##### Express

* http://code.tutsplus.com/tutorials/introduction-to-express--net-33367
* http://code.tutsplus.com/tutorials/nodejs-for-beginners--net-26314
* http://teknosains.com/i/simple-crud-nodejs-mysql
* https://scotch.io/tutorials/use-ejs-to-template-your-node-application
* http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/
* http://webapplog.com/express-js-tutorial-instagram-gallery-example-app-with-storify-api/
* http://gistpages.com/2013/10/31/simple_application_with_expressjs

##### Connecting to a MYSQL Database

* https://github.com/felixge/node-mysql#establishing-connections
* http://www.hacksparrow.com/using-mysql-with-node-js.html
* http://www.codediesel.com/nodejs/querying-mysql-with-node-js/
* http://utahjs.com/2010/09/22/nodejs-and-mysql-introduction/
* http://www.giantflyingsaucer.com/blog/?p=2596
* http://outof.me/experimenting-with-mysql-connections-and-nodeexpress/
* https://gist.github.com/clarle/3180770

##### JQuery & Ajax

* http://api.jquery.com/jQuery.ajax/
* https://learn.jquery.com/ajax/jquery-ajax-methods/
* http://www.w3schools.com/JQuery/jquery_ajax_get_post.asp
* http://codeforgeek.com/2014/09/handle-get-post-request-express-4/

##### Bootstrap

* http://www.w3schools.com/bootstrap/

### Next Steps

The next features to implement would be the administrators interface where one could login and then add/modify/remove objects and tours from the database.
