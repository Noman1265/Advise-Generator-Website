const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.get('/', function (req, res) {
  res.render("index")
})

app.get('/:username', function(req, res){
    res.get(`Hello From ${req.params.username}`)
})

app.listen(3000)