const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.get('/player/:id', controllers.getPlayerById)
router.get('/opening/:id', controllers.getOpeningById)
router.get('/all-openings', controllers.getAllOpenings)
router.get('/all-players', controllers.getAllPlayers)
router.get('/top-players/:id', controllers.getTopPlayers)

router.post('/create-player', controllers.createPlayer)
router.post('/create-opening', controllers.createOpening)
router.put('/edit-player/:id', controllers.editPlayer)
router.put('/edit-opening/:id', controllers.editOpening)
router.delete('/delete-player/:id', controllers.deletePlayer)
router.delete('/delete-opening/:id', controllers.deleteOpening)

module.exports = router
