import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({productCnt}) => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/products">Products {productCnt}</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/products/create">Create</NavLink>
            </li>
        </ul>
    )
}

export default Nav
