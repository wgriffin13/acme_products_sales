const Sequelize = require('sequelize')
const router = require('express').Router()
const {Product} = require('../db/index')

const Op = Sequelize.Op;

router.get('/products/sales', (req, res, next) => {
  Product.findAndCountAll({
    where: {
      discountedPercent: {[Op.gt]: 0}
    }
  })
    .then(data => res.send(data))
})

router.post('/products', (req, res, next) => {
    Product.create(req.body)
      .then(todo => res.json(todo))
      .catch(next)
})

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
