//for updating single record ,$set use to update
db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})

//for updating many records
db.items.updateMany({name: "Moto 30s"}, {$set: {price: 3, rating: 1}})