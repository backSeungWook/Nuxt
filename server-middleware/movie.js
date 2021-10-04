const express = require('express')

const app = express()

app.use(express.json()) //json GET/POST
app.post('/',(req,res)=>{

  res.status(200).json('H2')
})

module.exports = app