'use client'
import React from 'react'

import { useState,useEffect } from 'react'
import Card from './Card'


const Shop = () => {
    const [cartVisibility,setCartVisibility]=useState(false)

const [cartItems,setCartItems]=useState(
    JSON.parse(localStorage.getItem
        ('myshop')) || []
)

useEffect(()=>{
    localStorage.setItem('myshop',JSON.stringify(cartItems))
},[cartItems])
    const AddtoCart=(product)=>{
        const newProduct={
            ...product,
            count:1
        }
        setCartItems([...setItem,newProduct])

       

    }

  return (
    

    <div>

        <h1>Shop</h1>




    </div>
  )
}

export default Shop
