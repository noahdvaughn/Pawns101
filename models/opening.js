const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Opening = new Schema(
  {
    name: { type: String, required: true },
    master_win: { type: String },
    master_lose: { type: String },
    master_draw: { type: String },
    notable_players: { type: Array },
    white_moves: { type: Array },
    black_moves: { type: Array }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Opening', Opening)
