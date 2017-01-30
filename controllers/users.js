var express = require('express')
var router = express.Router()
var User = require('../models/User')



router.get('/:id', function(req, res) {
  User.get(req.params.id, function (err, comment) {
    
    res.set("Content-Type", "application/json")
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });

  })
})

module.exports = router