import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({productCnt, salesCnt}) => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/products">Products <span className="badge badge-primary">{productCnt}</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/products/sales">Sales <span className="badge badge-primary">{salesCnt}</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/products/create">Create</NavLink>
            </li>
        </ul>
    )
}

export default Nav
