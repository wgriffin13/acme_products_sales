import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Products from './Products'
import Sales from './Sales'
import CreateForm from './CreateForm'
import axios from 'axios'
import { throws } from 'assert';

export default class App extends React.Component {

    constructor () {
        super();
        this.state = {
            productCnt: '',
            salesCnt: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.adjustCount = this.adjustCount.bind(this)
    }

    adjustCount(countType) {
        this.setState({countType: this.state[countType] - 1})
    }

    componentDidMount() {
        Promise.all([axios.get('/api/products'),
            axios.get('/api/products/sales')])
            .then(values => {
                this.setState({productCnt: values[0].data.count})
                console.log(this.state.productCnt)
                this.setState({salesCnt: values[1].data.count})
                console.log(this.state.salesCnt)
            })
    }

    handleSubmit({event, history}) {
        event.preventDefault()
        axios.post('/api/products', this.state)
            .then(res => res.data)
            .then(data => {
                if (data.discountedPercent > 0) {
                    history.push('/products/sales')
                } else {
                    history.push('/products')
                }
            })

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }
 
    render () {
        return (
            <HashRouter>
                <div>
                    <h1>Acme Products/Sales</h1>
                    <Nav productCnt={this.state.productCnt} salesCnt={this.state.salesCnt} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products" render={() => <Products adjustCount={this.adjustCount} />} />
                    <Route exact path="/products/sales" render={() => <Sales />} />
                    <Route exact path="/products/create" render={({history}) => <CreateForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} history={history} /> } />
                </div>
            </HashRouter>
        )
    }
}
