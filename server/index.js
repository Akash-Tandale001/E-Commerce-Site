const express = require('express');
require('dotenv').config()

const app = express();
app.use('/api',require('./routes/api'));
const port = process.env.REACT_APP_PORT;



app.listen(port , ()=>{
    console.log(`Server is running on ${port} ...`);
})