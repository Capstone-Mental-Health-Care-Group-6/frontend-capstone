import React from 'react'
import Navbar from '../Fragment/Navbar'

function AuthLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="page-content">
                {children}
            </div>
        </>

    )
}

export default AuthLayout