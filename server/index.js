const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(express.json())
app.use(cors());
app.use('/api',require('./routes/api'));
const port = process.env.REACT_APP_PORT;



app.listen(port , ()=>{
    console.log(`Server is running on ${port} ...`);
})