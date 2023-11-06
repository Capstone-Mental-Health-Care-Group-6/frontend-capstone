import React from 'react'
import { logoEmpathiCare, logoKemenkes } from '../../../image'

function Navbar({ children }) {
    return (
        <div className='d-flex justify-content-center w-100' >
            <nav className="navbar navbar-expand-lg position-fixed ">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand" href="#"><img src={logoEmpathiCare} alt="" /></a>
                        <hr />
                        <span>
                            Diawasi <br /> Oleh
                        </span>
                        <a className="navbar-brand ms-2" href="#"><img src={logoKemenkes} alt="" /></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            {children}
                        </ul>
                        <button className='btn px-4' >Download Sekarang</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar