# Mead Art Museum

As the [Mead Art Museum](https://www.amherst.edu/museums/mead) at Amherst College develops a suite of community and school resources, one of the thematic focal points is on art and music - works that include representations of instruments or music making, or objects that themselves have audible components that are not readily accessible to the viewer. This is where digital technology comes in. Tho goal of this project is to develop user-friendly, and visually-compelling multi-device web application compatible with both Android and iOS devices that will provide supplementary audio, video and written content for a selection of objects in the museum.

## Table of contents

* [Folder Structure](#folder-structure)
* [Setting up the Testing Environment](#setting-up-the-testing-environment)
* [Running the Web Application](#running-the-web-application)
* [Creating and Populating the Database](#database)

* [The Implementation](#implementation)

## Folder Structure

## Setting up the Testing Environment

To setup a programming and testing environment identical to those your fellow programmers working on this project are using you can run Vagrant on top of VirtualBox. VirtualBox allows you to set up a virtual machine on your local machine and Vagrant helps with easy configuration of the virtual machine.

First, visit the [VirtualBox downloads page](https://www.virtualbox.org/wiki/Downloads) to download and install the version of VirtualBox for your platform.  Next, download and install [Vagrant](https://www.vagrantup.com/downloads.html) for your platform. To bootstrap the virtual machine you will need to use the [terminal](http://guides.macrumors.com/Terminal) (if you are on Linux or Mac OS X) or the [command prompt](http://www.cs.princeton.edu/courses/archive/spr05/cos126/cmd-prompt.html) (if you are running Windows).

To download the Vagrantfile, a configuration file for the virtual machine used for this project, you should clone the mead-museum-tours repository. Open the terminal window on our machine, navigate to a place where you would like to keep all the application files and then type the following command into the prompt:

	$ git clone https://github.com/plejskova/mead-museum-tours.git

This will create a local copy of the mead-museum-tours repository on your machine. For information on installing and using git visit the [GitHub help page](https://help.github.com/articles/set-up-git/).

To bootup the virtual machine system, navigate into the mead-museum-tours folder (which contains the Vagrantfile) in your terminal window:

	$ cd mead-museum-tours

The bootup process will download all the necessary software, so make sure that you are connected to a reliable network before proceeding. In the directory containing the Vagrantfile run this command:

	$ vagrant up

There will be a lot of output on the screen telling you what software is being downloaded and installed. The bootup process might take a while, so at this point you can take a break.

Once the bootup is complete, you will need to connect to the virtual machine. On Mac and Linux this is easy because both systems have pre-installed software to do this. In your terminal window make sure that you are in the folder containing the Vagrantfile and type:

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

