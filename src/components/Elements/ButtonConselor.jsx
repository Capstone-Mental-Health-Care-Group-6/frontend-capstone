import React from 'react'

function ButtonConselor({ img, text }) {
    return (
        <div className="col d-flex justify-content-start"> <button className='btn' ><img src={img} alt="" /> {text}</button></div>
    )
}

export default ButtonConselor