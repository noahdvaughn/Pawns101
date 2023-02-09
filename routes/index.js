const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.post('/create-player', controllers.createPlayer)
router.post('/create-opening', controllers.createOpening)
router.put('/update-player/:id', controllers.updatePlayer)
router.put('/update-opening/:id', controllers.updateOpening)
router.delete('/delete-player/:id', controllers.deletePlayer)
router.delete('/delete-opening/:id', controllers.deleteOpening)

module.exports = router
