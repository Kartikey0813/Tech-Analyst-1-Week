db.inventory.find() // Retrieve all documents from the 'inventory' collection 

db.inventory.find().pretty(); // Display the documents in a more readable format

db.inventory.find({ status: "available" }); // Find all documents where status is 'available'
db.inventory.find({ qty: 50 }); // Find all documents where
// quantity is 50

db.inventory.find({ "size.h": { $gt: 1 } }); // Find all documents where height is greater than 1
db.inventory.find([{ tags: "electronics", // Find all documents with the tag 'electronics'
    item: "Scanner",
        qty: 25,
        status: "available",
        tags: ["electronics", "office"],
        size: { h: 3, w: 10, l: 15 },
        warehouseLocation: "H8"
    }
]); // Insert multiple documents into the 'inventory' collection    

