const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Player = new Schema(
  {
    name: { type: String, required: true },
    nationality: { type: String, required: true },
    elo: { type: String },
    age: { type: String, required: true },
    favorite_opening: { type: String }
    //this favorite opening needs to be changed
  },
  { timestamps: true }
)

module.exports = mongoose.model('Player', Player)

// {
//   "name": "Noah",
//   "nationality": "American",
//   "age": "23"
// }