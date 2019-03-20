import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleProduct = ({item, deleteProduct}) => {
    return (
        <li key={item.name} className="list-group-item">
            {item.name}
            <br />
            <span style={(item.discountedPercent > 0) ? {textDecoration: 'line-through'} : {}}>${item.price}</span>
            <div>
                {(item.discountedPercent > 0) ? <span className="badge badge-success">${item.discountedPercent * item.price}</span> : ''}
            </div>
            <span className={(item.availability==='instock') ? "badge badge-success" : "badge badge-warning"} style={{marginBottom: "5px"}}>{item.availability}</span>
            <br />
            <button className="btn btn-danger btn-sm" onClick={()=>deleteProduct(item.id)}>Delete</button>
        </li>
    )
}

export default SingleProduct
