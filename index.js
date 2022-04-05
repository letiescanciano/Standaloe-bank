// Contains and runs the Express application, you are requiring the DAL application, so you can use the functions you exported
//to manipulate the database

var express = require('express')
var app = express()
var cors = require('cors')
var dal = require('./dal.js')

// app.use(express.static('public'));
app.use(express.static('public')) //<--Leti didn't use this
app.use(cors())
//create user account(calls the DAL)
app.get('/account/create/:name/:email/:password', function (req, res) {
  //else create user
  dal
    .create(req.params.name, req.params.email, req.params.password)
    .then(user => {
      console.log(user)
      res.json(user)
    })
})
//All accounts
app.get('/account/all', function (req, res) {
  dal.all().then(docs => {
    console.log(docs)
    res.send(docs)
  })
})

var port = 3001
app.listen(port, () => {
  console.log('Running on port: ' + port)
})
