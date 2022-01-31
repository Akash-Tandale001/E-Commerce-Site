const router = require('express').Router();
const data = require('./productdata');

router.get("/" ,(req,res)=>{
    res.send(data);
})

module.exports = router;