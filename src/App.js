import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Products from './Products'
import CreateForm from './CreateForm'

export default class App extends React.Component {

    constructor () {
        super();
        this.state = {
            productCnt: '',
        }
        this.countAllProducts = this.countAllProducts.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    countAllProducts(count) {
        this.setState.productCnt = count
    }

    handleSubmit(event) {

    }
    
    handleChange(event) {

    }
 
    render () {
        return (
            <HashRouter>
                <div>
                    <h1>Acme Products/Sales</h1>
                    <Nav productCnt={this.state.productCnt} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products" render={() => <Products countAllProducts={this.countAllProducts} />} />
                    <Route exact path="/products/create" component={CreateForm} />
                </div>
            </HashRouter>
        )
    }
}
