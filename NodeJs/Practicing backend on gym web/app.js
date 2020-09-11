const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

app.use('/static', express.static('static'))
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


app.get('/' ,(req,res) =>{
    res.status(200).render('index.pug');
}); 

app.post('/',(req,res)=>{
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    let outputTOWrite = `The name of client is ${name}, ${age} year old, ${gender}, lives in ${address} , ${more}`;
    fs.writeFileSync('output.txt',outputTOWrite);
    const params = {'message' : 'Your form has been submitted succesfully'};
    res.status(200).render('index.pug',params);
})

app.listen(port, ()=>{
    console.log(`The application is succesfully on port ${port}`);
});