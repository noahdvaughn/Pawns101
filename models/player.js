const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Player = new Schema(
  {
    name: { type: String, required: true },
    nationality: { type: String, required: true },
    elo: { type: String },
    age: { type: String, required: true },
    profile_url: { type: String },
    favorite_opening: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Player', Player)
