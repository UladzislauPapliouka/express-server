const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express();

const APP_PORT = 6006;

app.options('*', cors());

app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send("Hello, world!")
})
app.post(`/seobility`,(req, res) =>{
    if(req.body.phone === "+7 (___) ___-__-__") {
        res.status(400).send({status:"error", message: "Enter correct phone"})
        return
    }
    res.status(200).send({status:"success", message:"Successful sending"})
})

app.listen(APP_PORT, () => {
    console.warn(`App listening on port ${APP_PORT}`)
})