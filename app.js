const express = require('express');
const phones = require('./phone.json');
const app = express();
const port = 3000

app.get('/',(req, res) =>{
    res.send('hello,phones data is coming sooooon!!');
})

app.get('/phones', (req, res) =>{
    res.send(phones)
})

app.get('/phone/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    console.log('phone id number:- ', id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)
})

app.listen(port,()=>{
    console.log(`Connected server successfully ${port}`)
})