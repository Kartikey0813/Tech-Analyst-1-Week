// show dbs - It is a command to list all databases in MongoDB
// show collections - It is a command to list all collections in the current database. 

// use <database_name> - It is a command to switch to a specific database or create it if it doesn't exist.
// db - It is a command to refer to the current database in use.    

// db.createCollection(<collection_name>) - It is a command to create a new collection in the current database. 
// db.<collection_name>.insertOne(<document>) - It is a command to insert a single document into the specified collection.
// use employees;  Switch to or create the Employees database
db.createCollection("customers"); // Create a collection named 'customers'
