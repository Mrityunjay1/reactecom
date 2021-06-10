import React from 'react'
import {Link} from 'react-router-dom'

export default function Product() {
    return (
        <Link to='/Product/New'>
            <div>
                <div>
                    <img src="/Images/pizza2.png" alt="Pizza" />
                    <div className="text-center">
                        <h2 className="text-lg font-bold py-2">Peporoni</h2>
                        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span>$20</span>
                        <button className="py-1 px-4 bg-yellow-500 rounded-full font-bold">ADD</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}
