import React from 'react'
import Navbar from '../Fragment/Navbar'
import SideBarList from '../Elements/SideBarList'

function AuthLayout({ children }) {
    return (
        <>
            <Navbar >
                <SideBarList title={'Home'} />
                <SideBarList title={'Services'} />
                <SideBarList title={'About Us'} />
                <SideBarList title={'Register'} />
            </Navbar>

            <div className="page-content">
                {children}
            </div>
        </>

    )
}

export default AuthLayout