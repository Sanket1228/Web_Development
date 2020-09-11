const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

//EXPRESS RELATED STUFFS
app.use('/static',express.static('static'));            //for serving the static files
app.use(express.urlencoded());

//PUG RELATED STUFFS
app.set('view engine','pug');                           //set the template engine as pug
app.set('views',path.join(__dirname,'views'));          //set the view directory

app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
})
app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
})

app.listen(port,()=>{
    console.log(`The application is started succesfully on port ${port}`);
})
