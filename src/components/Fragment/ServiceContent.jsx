import React from 'react'

function ServiceContent({ title, text, img }) {
    return (
        <div className="service-content d-grid ">
            <img className='mx-auto' src={img} alt="" />
            <div className="text-center mt-3">
                <h3> {title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ServiceContent