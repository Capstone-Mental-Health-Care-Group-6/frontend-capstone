import React from 'react'
import AuthLayout from '../../components/Layout/UserLayout'
import './LandingPage.style.css'
import { mentalHealthAmico } from '../../../image'


function LandingPage() {
    return (
        <AuthLayout>
            <div className='home' id='home'>
                <div className="row d-flex align-items-center row-cols-lg-2 row-cols-1">
                    <div className="col d-grid ">
                        <h1>Apakah Anda <br />
                            Merasa Stres?
                        </h1>
                        <p>Temukan solusi terbaik untuk masalah kesehatan mental Anda. Capai kesejahteraan dan kebahagiaan yang Anda inginkan bersama kami.</p>
                        <button className='btn mt-3' >Mulai Perjalanan Kesehatan Mental Anda</button>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <img src={mentalHealthAmico} alt="" />
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default LandingPage