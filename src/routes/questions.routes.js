const {Router} = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.send('Endpoint para obtener las questions')
})

module.exports = router;