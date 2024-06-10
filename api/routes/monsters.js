const router = require('express').Router();
const {
  getMonsters
} = require('../controllers/monsterController');

// router.get('/', function(req, res, next) {
//   fetch('https://www.dnd5eapi.co/api/monsters/young-blue-dragon').then(response => {
//     return response.text()
//   }).then(data => { 
//     res.send(data)
//   })
// });
router.route('/').get(getMonsters)

module.exports = router;