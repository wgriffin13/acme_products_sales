import React from 'react'

const CreateForm = ({handleSubmit, handleChange, history}) => {
    return (
        <form onSubmit={(event) => handleSubmit({event, history})}>
            <div className="mt-2">
                <labal htmlFor='nameLabel'>Name</labal>
                <input name='name' type='text' className='form-control' onChange={handleChange} />
            </div>
            <div className="mt-2">
                <label htmlFor='priceLabel'>Price</label>
                <input name='price' type='text' className='form-control' onChange={handleChange} />
            </div>
            <div className="mt-2">
                <label htmlFor='discountPercent'>Discount Percent</label>
                <input name='discountedPercent' type='text' className='form-control' onChange={handleChange} />
            </div>
            <div className="mt-2">
                <label htmlFor='availability'>Availability</label>
                <select className='form-control'>
                    <option>instock</option>
                    <option>backordered</option>
                    <option>discontinued</option>
                </select>
            </div>
            <button className="mt-2 btn btn-primary" type="submit">Create</button>
        </form>
    )
}

export default CreateForm
