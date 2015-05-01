### Mead Art Museum

#### Database Maintenance:  


##### Login
Log in to MySql to select and access database

	mysql -u root -pmarylyon
	mysql> use meadmuseum

##### View content of a table
	select * from objects;
or 
	select * from tours;

don't forget the semi-colon at the end of every SQL command!

##### To add an element to a table
The INSERT INTO statement is used to insert new records in a table.
It is possible to write the INSERT INTO statement in two forms.

The first form does not specify the column names where the data will be inserted, only their values:

	INSERT INTO table_name VALUES (value1,value2,value3,...);

The second form specifies both the column names and the values to be inserted:

	INSERT INTO table_name (column1,column2,column3,...) VALUES (value1,value2,value3,...);

We can use the second form first, but in the case of a syntax error, switch back to the first method.

To add an object into the object table, the command would be as follows:

	INSERT INTO objects (id, title , makers, culture, location, date, materials, measurements, asc_num , credit_line , desc , room, pic, sound, video, tour) VALUES ( [leave blank, this value is automatically generated], 'title' , 'makers', 'culture', 'location', date ....)
note that fields that are strings (text) need to be surrounded by single quotation marks. this does not apply for numeric fields

To add a new tour into the tour table, the command would be as follows:

	INSERT INTO tour (id, name, desc) VALUES ( [leave blank, this value is automatically generated], 'name', 'desc')

##### To remove an element from a table
The DELETE statement is used to delete records in a table, using a conditional.
	DELETE FROM table_name WHERE some_column=some_value;

For example, if you wanted to delete a particular object, you can delete it with its id number
	DELETE FROM objects WHERE id=1;

##### To update an element
The UPDATE statement is used to update existing records in a table. The WHERE clause specifies which record or records that should be updated. If you omit the WHERE clause, all records will be updated!
	UPDATE table_name SET column1=value1,column2=value2,... WHERE some_column=some_value;

For example, if you wanted to place all objects with English artists into another tour, 
	UPDATE objects SET tour=5 WHERE culture=England;
This is assuming that there is already a tour with the id number of 5 located in the tour table!