const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', { useNewUrlParser: true });
const port = 8000;

//making schema how the items are been stored
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    age: String,
    address: String,
    desc: String
});

const contact = mongoose.model('contact', contactSchema);

//EXPRESS RELATED STUFFS
app.use('/static', express.static('static'));            //for serving the static files
app.use(express.urlencoded());

//PUG RELATED STUFFS
app.set('view engine', 'pug');                           //set the template engine as pug
app.set('views', path.join(__dirname, 'views'));          //set the view directory

app.get('/', (req, res) => {
    res.status(200).render('home.pug');
})
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
})
app.post('/contact', (req, res) => {
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("This items are saved to database");
    }).catch(()=>{
        res.status(400).send("Items are not send to the database");
    });
})

app.listen(port, () => {
    console.log(`The application is started succesfully on port ${port}`);
})
