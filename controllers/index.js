const Player = require('../models/player')
const Opening = require('../models/opening')

const createPlayer = async (req, res) => {
  try {
    const player = await new Player(req.body)
    await player.save()
    return res.status(201).json({
      player
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const createOpening = async (req, res) => {
  try {
    const opening = await new Opening(req.body)
    await opening.save()
    return res.status(201).json({
      opening
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getPlayerById = async (req, res) => {
  try {
    const { id } = req.params
    const player = await Player.findById(id)
    if (player) {
      return res.status(200).json({ player })
    }
    return res.status(404).send('Player with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPlayer,
  createOpening,
  getPlayerById
}
