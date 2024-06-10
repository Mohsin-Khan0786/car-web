'use client'
import React, { useState } from 'react'
import Products from '@/components/shared/List'
import '@/components/styles/cardDetail.css'
const page = ({params:{id}}) => {
  const [myproducts,setmyproducts]=useState([])
  

    const product=Products.find((item)=>item.id==id)
const ADD=(item)=>{
  const newproduct={
    ...item,
    quantity:1
  }  
  setmyproducts((preproduct)=>[...preproduct,newproduct])
  localStorage.setItem('cart',JSON.stringify([...myproducts,newproduct]))

  alert(item.id)

}
  return (
    <>
    <div className="contain">
    <div className='detail'>
    <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <h5>{product.description}</h5> 
        <h2>{product.price}</h2>
        <button onClick={()=>ADD(product)}>
      Add To Cart
    </button>
    </div>
    <div className='contain-img'>
    <img src={product.interior1} alt={product.name}/>
    <img src={product.interior2} alt={product.name} />
    </div>
    
   

    </div>
    </>
  )
}

export default page