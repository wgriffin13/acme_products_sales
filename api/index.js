const router = require('express').Router()
const {Product} = require('../db/index')

router.delete('/products/:id', (req, res, next) => {
    Product.destroy({
        where: {
          id: req.params.id
        }
      })
    .then(() => res.status(204).end())
    .catch(next)
})

router.get('/products', (req, res, next) => {
    Product.findAndCountAll()
        .then(data => res.send(data))
})

module.exports = router
