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

db.inventory.insertMany([
    {
        item: "Laptop",
        qty: 50,
        status: "available",
        tags: ["electronics", "computers"],
        size: { h: 1.5, w: 15, l: 10 },
        warehouseLocation: "A1"
    },
    {
        item: "Smartphone",
        qty: 100,
        status: "available",
        tags: ["electronics", "mobile"],
        size: { h: 0.5, w: 3, l: 6 },
        warehouseLocation: "B2"
    },
    {
        item: "Tablet",
        qty: 75,
        status: "available",
        tags: ["electronics", "mobile"],
        size: { h: 0.8, w: 5, l: 8 },
        warehouseLocation: "C3"
    },
    {
        item: "Monitor",
        qty: 30,
        status: "available",
        tags: ["electronics", "computers"],
        size: { h: 12, w: 20, l: 24 },
        warehouseLocation: "D4"
    },
    {
        item: "Keyboard",
        qty: 200,
        status: "available",
        tags: ["electronics", "accessories"],
        size: { h: 1, w: 5, l: 15 },
        warehouseLocation: "E5"
    },
    {
        item: "Mouse",
        qty: 150,
        status: "available",
        tags: ["electronics", "accessories"],
        size: { h: 1, w: 3, l: 5 },
        warehouseLocation: "F6"
    },
    {
        item: "Printer",
        qty: 20,
        status: "available",
        tags: ["electronics", "office"],
        size: { h: 12, w: 18, l: 24 },
        warehouseLocation: "G7"
    },
    {
        item: "Scanner",
        qty: 15,
        status: "available",
        tags: ["electronics", "office"],
        size: { h: 6, w: 12, l: 18 },
        warehouseLocation: "H8"
    },
    {
        item: "Router",
        qty: 40,
        status: "available",
        tags: ["electronics", "networking"],
        size: { h: 2, w: 8, l: 10 },
        warehouseLocation: "I9"
    },
    {
        item: "External Hard Drive",
        qty: 60,
        status: "available",
        tags: ["electronics", "storage"],
        size: { h: 1, w: 4, l: 6 },
        warehouseLocation: "J10"
    }
]); // Insert multiple documents into the 'inventory' collection