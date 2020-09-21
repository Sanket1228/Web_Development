const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sanketKart', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log("We are connected bro")
// });

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    const greeting = "My name is " + this.name;
    console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);

const sanketKitty = new Kitten({ name: 'sanket Patil' });
const ganeshKitty = new Kitten({ name: 'Ganesh Patil' });
console.log(sanketKitty.name);
// sanketKitty.speak();

sanketKitty.save(function (err, sanketKitty) {
    if (err) return console.error(err);
    // sanketKitty.speak();
});
ganeshKitty.save(function (err, b) {
    if (err) return console.error(err);
    // b.speak();
});

Kitten.find({name:"sanket Patil"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})