const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.post('/create-player', controllers.createPlayer)
router.post('/create-opening', controllers.createOpening)

module.exports = router
