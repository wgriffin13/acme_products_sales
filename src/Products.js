import React, {Component} from 'react'
import axios from 'axios'
import SingleProduct from './SingleProduct';

export default class Products extends Component {
    constructor () {
        super()
        this.state = {
            productList: []
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(productId) {
        axios.delete('api/products/' + productId)
          .then(res => res.data)
          .then(() => {
            this.setState({productList: this.state.productList.filter(item => item.id !== productId)})
          })
      }

    componentDidMount () {
        axios.get('/api/products')
            .then(response => response.data)
            .then(data => {
                this.setState({productList: data.rows})
                this.props.countAllProducts(data.count);
            })
    }
    

    render () {
        return (
            <ul className="list-group">
                {this.state.productList.map(item => {
                    return (
                        <SingleProduct key={item.id} item={item} deleteProduct={this.deleteProduct} />
                    )
                })}
            </ul>
        )
    }
}
