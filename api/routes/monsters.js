var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  fetch('https://www.dnd5eapi.co/api/monsters/young-blue-dragon').then(response => {
    return response.text()
  }).then(data => { 
    res.send(data)
  })
});

module.exports = router;