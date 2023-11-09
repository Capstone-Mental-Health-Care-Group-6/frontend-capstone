import Navbar from '../Fragment/Navbar'
import SideBarList from '../Elements/SideBarList'
import React, { useState, useEffect } from 'react'



function AuthLayout({ children }) {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let found = false;

            sections.forEach(section => {
                if (!found) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                        setActiveSection(section.id);
                        found = true;
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(activeSection);
    return (
        <>
            <Navbar >
                <SideBarList title={'Home'} href={'home'} className={activeSection === 'daftar-sekarang' | 'home' ? 'active' : ''} />
                <SideBarList title={'Services'} href={'services'} className={activeSection === 'services' ? 'active' : ''} />
                <SideBarList title={'About Us'} href={'conselors'} className={activeSection === 'conselors' ? 'active' : ''} />
                <SideBarList title={'Register'} href={'register'} className={activeSection === 'register' ? 'active' : ''} />
            </Navbar>

            <div className="page-content">
                {children}
            </div>
        </>

    )
}

export default AuthLayout