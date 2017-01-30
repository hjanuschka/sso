var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000
var MongoClient = require('mongodb').MongoClient



app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


app.use(require('./controllers/users'))

app.use(function(err, req, res, next){
    res.set("Content-Type", "application/json")
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
   return;
});


MongoClient.connect('mongodb://localhost:27017/sso', (err, database) => {
  var db = database;
  app.listen(port, function() {
    console.log('Listening on port' + port)
    db.collection("users").insertOne({a:1, b:2}, (doc, err) => {
        console.log(doc)
        console.log(err)
    });
  })
})
