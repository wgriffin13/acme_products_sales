const Sequelize = require('sequelize')
const conn = require('./conn')

const Product = conn.define('product', {
    name: Sequelize.STRING,
    price: Sequelize.DOUBLE,
    discountedPercent: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
    },
    availability: {
        type: Sequelize.STRING,
        validate: {
            isIn: [['instock', 'backordered', 'discontinued']]
        }
    }
})

module.exports = Product
