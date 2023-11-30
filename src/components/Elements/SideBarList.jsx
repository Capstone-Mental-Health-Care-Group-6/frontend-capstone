import React from 'react'
function SideBarList({ title, href, className }) {
    return (
        <li className="nav-item">
            <a className={`nav-link ${className}`} href={`#${href}`}>{title}</a>
        </li>
    )
}

export default SideBarList