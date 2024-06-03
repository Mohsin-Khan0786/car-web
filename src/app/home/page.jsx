import React from 'react'
import '@/app/components/styles/home.css'
import Image from 'next/image'
import Card from '../products/card'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <header>

        <div className="container">
            <div className="headercontent">
                <h1>Discover the Ultimate Driving Experience with DriveLux</h1>
                {/* <h5>DriveLux is the ultimate all-in-one solution for your car.</h5> */}
                <Link href='/products/Card'>
                <button>
                Begin Adventure
                </button>
                </Link>
            </div>
        </div>
    </header>
  
    </>
  )
}

export default page