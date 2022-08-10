var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.get("/", (req, res) => {
    res.send("Hello, world!")
})
router.post(`/`,(req, res) =>{
    if(req.body.phone === "+7 (___) ___-__-__") {
        res.status(400).send({status:"error", message: "Enter correct phone"})
        return
    }
    res.status(200).send({status:"success", message:"Successful sending"})
})

module.exports = router;


