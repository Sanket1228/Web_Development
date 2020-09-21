show dbs    //to show the databases
use sanketKart  //for using this database
show collections //for showing the collections in databases

//for inserting one record
db.items.insertOne({name:"Samsung",price:22000,rating:4.5,qty:222,sold:98})

//for inserting many records
db.items.insertMany([{name:"Samsung",price:22000,rating:4.5,qty:222,sold:98},{name:"realme",price:33000,rating:4.5,qty:212,sold:21}])