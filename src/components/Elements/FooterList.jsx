import React from 'react'

function FooterList({ title, location = '#' }) {
    return (
        <a href={location}>{title} <br /></a>
    )
}

export default FooterList