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
const getAllOpenings = async (req, res) => {
  try {
    const openings = await Opening.find()
    return res.status(200).json({ openings })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find()
    return res.status(200).json({ players })
  } catch (error) {
    return res.status(500).send(error.message)
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
const getOpeningById = async (req, res) => {
  try {
    const { id } = req.params
    const opening = await Opening.findById(id)
    if (opening) {
      return res.status(200).json({ opening })
    }
    return res.status(404).send('Opening with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const editPlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(player)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const editOpening = async (req, res) => {
  try {
    const opening = await Opening.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(opening)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Player.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Player deleted')
    }
    throw new Error('Player not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteOpening = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Opening.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Opening deleted')
    }
    throw new Error('Opening not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPlayer,
  createOpening,
  getAllOpenings,
  getAllPlayers,
  getPlayerById,
  getOpeningById,
  editPlayer,
  editOpening,
  deletePlayer,
  deleteOpening
}
