const router = require('express').Router();
const data = require('./productdata');

router.get("/" ,async(req,res)=>{
    try {
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json({
          message: "Some error occured",
          err
        });
      }
})

module.exports = router;