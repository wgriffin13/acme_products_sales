import React from 'react'

const CreateForm = ({handleSubmit, handleChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-2">
                <labal htmlFor='name'>Name</labal>
                <input name='name' type='text' className='form-control' onChange={handleChange} />
            </div>
            <div className="mt-2">
                <label htmlFor='price'>Price</label>
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
            <button className="mt-2 btn btn-primary" disabled type="submit">Create</button>
        </form>
    )
}

export default CreateForm
