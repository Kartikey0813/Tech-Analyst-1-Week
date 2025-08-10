// show dbs - It is a command to list all databases in MongoDB
// show collections - It is a command to list all collections in the current database. 

// use <database_name> - It is a command to switch to a specific database or create it if it doesn't exist.
// db - It is a command to refer to the current database in use.    

// db.createCollection(<collection_name>) - It is a command to create a new collection in the current database. 
// db.<collection_name>.insertOne(<document>) - It is a command to insert a single document into the specified collection.
use employees; // Switch to or create the Employees database
db.createCollection("customers"); // Create a collection named 'customers'
db.customers.insertOne({
    name: "John Doe",
    email: "",
    phone: "123-456-7890",
    issue: "Unable to connect to the internet",
    status: "open",
    createdAt: new Date()
}); // Insert a sample document into the 'customers' collection
db.createCollection("tickets"); // Create a collection named 'tickets'
db.tickets.insertOne({
    customerId: ObjectId("60c72b2f9b1e8b3f8c8b4567"), // Replace with a valid ObjectId from the 'customers' collection
    issue: "Internet connection issue",
    status: "open",
    createdAt: new Date(),
    updatedAt: new Date()
}); // Insert a sample document into the 'tickets' collection
db.createCollection("technicians"); // Create a collection named 'technicians'
db.technicians.insertOne({
    name: "Jane Smith",
    email: "",
    phone: "987-654-3210",
    expertise: "Network issues",
    createdAt: new Date()
}); // Insert a sample document into the 'technicians' collection
db.createCollection("responses"); // Create a collection named 'responses'
db.responses.insertOne({
    ticketId: ObjectId("60c72b2f9b1e8b3f8c8b4567"), // Replace with a valid ObjectId from the 'tickets' collection
    technicianId: ObjectId("60c72b2f9b1e8b3f8c8b4568"), // Replace with a valid ObjectId from the 'technicians' collection
    response: "We are looking into your issue and will get back to you shortly.",
    createdAt: new Date()
}); // Insert a sample document into the 'responses' collection
db.createCollection("logs"); // Create a collection named 'logs'
db.logs.insertOne({
    action: "Ticket created",
    ticketId: ObjectId("60c72b2f9b1e8b3f8c8b4567"), // Replace with a valid ObjectId from the 'tickets' collection
    createdAt: new Date()
}); // Insert a sample document into the 'logs' collection