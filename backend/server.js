const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.post('/api/configuration', (req,res) => {
    //Recieves data here
    res.send({status: 'Successful', data: req.body})
})

app.listen(8080, () => {
    console.log("Listening on port 8080...")
})