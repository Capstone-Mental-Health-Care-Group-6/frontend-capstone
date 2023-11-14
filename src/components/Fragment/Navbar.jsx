import React, { useState } from 'react'
import { logoEmpathiCare, logoKemenkes } from '../../../image'

function Navbar({ children }) {
    const [navbarBg, setnavbarBg] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setnavbarBg(true)
        } else {
            setnavbarBg(false)
        }
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    window.addEventListener('scroll', changeBackground)
    return (
        <div className='d-flex justify-content-center w-100' >
            <nav className={`navbar navbar-expand-lg position-fixed ${navbarBg ? 'navbarbgActive' : ''}`}>
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand logoEmpathiCare" href="#"><img src={logoEmpathiCare} alt="" /></a>
                        <hr />
                        <span className='text-navbar'>
                            Diawasi <br /> Oleh
                        </span>
                        <a className="navbar-brand kemenkes ms-2" href="#"><img src={logoKemenkes} alt="" /></a>
                    </div>
                    <div onClick={handleMenuClick} className={`{ navbar-toggler border-0 ${isOpen ? 'opened' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <svg width="34" height="34" viewBox="0 0 100 100">
                                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                <path className="line line2" d="M 20,50 H 80" />
                                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                            </svg>
                        </span>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            {children}
                        </ul>
                        <button className={`btn px-4 ${navbarBg ? 'bg-primary text-white' : ''}`}>Download Sekarang</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar