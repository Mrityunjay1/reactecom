import React from 'react'
import Product from "../Components/Product";
import {useState,useEffect} from 'react'

export default function Products() {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        
    },[]);

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg fonty-bold my-8">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                <Product/>
            </div>
        </div>
    )
}
