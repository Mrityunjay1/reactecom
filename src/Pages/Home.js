import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <>
        <div className="hero py-16">
          <div className="container mx-auto flex items-center justify-between">
            <div className="w-1/2">
                <h6 className="text-lg"><em>Feeling Hungry</em></h6>
                <h2 className="text-2xl md:text-6xl font-bold">Dont Wait</h2>
                <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">Order now</button>
            </div>
            <div className="w-1/2">
                <img className="w-4/5" src="/Images/pizza1.png" alt="Pizza" style={{height:600}} />
            </div>
          </div>  
        </div>
        <div className="pb-24">
            <Products />
        </div>
        </>
        
    )
}
