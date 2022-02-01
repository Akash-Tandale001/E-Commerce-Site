const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config()

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors());
app.use('/api',require('./routes/api'));
const port = process.env.REACT_APP_PORT;

app.use(express.static(path.join(__dirname,"../client/build")));

app.get("*" , (_,res)=>{
    res.sendFile(path.join(__dirname,"../client/build/index.html",
    function(err){
        if(err){
            res.status(500).send(err);
        }
    }))

})



app.listen(port , ()=>{
    console.log(`Server is running on ${port} ...`);
})