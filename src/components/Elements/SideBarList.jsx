import React from 'react'

function SideBarList({ title }) {
    return (
        <li className="nav-item">
            <a className="nav-link" >{title}</a>
        </li>
    )
}

export default SideBarList