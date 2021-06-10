import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
    const cartStyle={
        background:'red',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'25px'
    }
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">
                
                    <Link to="/">
                        <img src="/Images/Logo.png" alt="Logo" style={{height:45}}/>
                    </Link>
                    <ul className="flex items-center">
                        <li><Link to="/">Home</Link></li>
                        <li className="ml-6"><Link to="/Products">Products</Link></li>
                        <li className="ml-6">
                        <Link to="/Cart">
                            <div style={cartStyle}>
                            <span className="text-black">10</span>
                            <img className="ml-2" src="/Images/cart.png" alt="Cart" style={{height:25}} />
                            </div>
                        </Link>
                        </li>
                    </ul>
                
            </nav>
        </>
    )
}
