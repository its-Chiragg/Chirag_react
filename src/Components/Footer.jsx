import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div>
            <p className="footer">Copyright © {year}</p>
        </div>
    )
}

export default Footer