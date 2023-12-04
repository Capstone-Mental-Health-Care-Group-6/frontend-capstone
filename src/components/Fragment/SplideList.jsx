import { SplideSlide } from '@splidejs/react-splide'
import React from 'react'

function SplideList({ img, name, specialist }) {
    return (
        <SplideSlide>
            <div className="card-caraosel border-0 ">
                <img className='mx-auto ' src={img} alt="" />
                <div className="text-center p-3">
                    <h5 className='mt-3'>{name}</h5>
                    <span>{specialist}</span>
                </div>
            </div>
        </SplideSlide>
    )
}

export default SplideList