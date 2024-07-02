const {Schema, model} = require('mongoose');

const monsterSchema = new Schema({
  monster_id: { type: Number, required: true},
  name: { type: String, required: true },
  cr: { type: Number, required: true },
  type: { type: String, required: true },
  size: { type: String, required: true },
  ac: { type: Number, required: true },
  hp: { type: Number, required: true },
  special_speed: { type: String, required: false },
  alignment: { type: String, required: true },
  legendary: { type: Boolean, required: false },
  source: { type: String, required: true },
  token_img: { type: String, required: false },
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

const Monster = model('monster', monsterSchema);
module.exports = Monster;