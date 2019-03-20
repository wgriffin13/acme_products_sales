const conn = require('./conn')
const Product = require('./Product')

const products = [
    {name: 'Bazz', price: 4, discountedPercent: 0, availability: 'backordered'},
    {name: 'Foo', price: 2, discountedPercent: 0, availability: 'discontinued'},
    {name: 'Cliq', price: 15, discountedPercent: 0.25, availability: 'instock'}
]

const syncAndSeed = () => {
    return conn.sync({ force: true })
    .then(() => {
        return Promise.all([
            Promise.all(
                products.map(item => Product.create(item))
            )
        ])
    })
};

module.exports = {
    conn,
    syncAndSeed,
    Product
}
