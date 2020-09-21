use sanketKart

//to print all records
db.items.find()

//to print elements with filter
db.items.find({rating:3.5})
db.items.find({rating: {$gte: 3.5}})  //greater than or equal to $gte
db.items.find({rating: {$gt: 3.5}})   //greater than

//here , is used as and operator
db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})
db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})

//here $or is used as or operator
db.items.find({$or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}]})

//here {rating: 1} this means rating == 1 , so it will show only record of ratings  
db.items.find({rating: {$gt: 3.5}}, {rating: 1})