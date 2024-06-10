const Monster = require('../models/monster');
const conn = require('../config/connection');

module.exports = {
  async getMonsters(req, res){
    try {
      const monsters = await Monster.find()
      res.json(monsters);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }
}