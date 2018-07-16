const express= require('express');
const bodyParser =require('body-parser')
const app= express();
app.set('views engine','ejs')
app.use(express.static('public'));
app.get('/',(req,res)=>{res.send("hellow ISPY")});
app.post()
app.listen('3000',()=>console.log("listing port no 3000"))