import React, {Component} from 'react'
import axios from 'axios'
import SingleProduct from './SingleProduct';

export default class Sales extends Component {
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
            this.props.adjustCount('salesCnt')
            this.setState({productList: this.state.productList.filter(item => item.id !== productId)})
          })
      }

    componentDidMount () {
        axios.get('/api/products/sales')
            .then(response => response.data)
            .then(data => {
                this.setState({productList: data.rows})
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