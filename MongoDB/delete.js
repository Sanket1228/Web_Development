// deleting single item in database
db.items.deleteOne({price: 22000})

// deleting multiple items in databases using filtered records
db.items.deleteMany({price: 129000})
