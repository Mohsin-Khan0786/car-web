import React from 'react'
import '@/app/components/styles/home.css'
import Image from 'next/image'
const page = () => {
  return (
    <>
    <header>

        <div className="container">
            <div className="headercontent">
                <h1>Discover the Ultimate Driving Experience with DriveLux</h1>
                {/* <h5>DriveLux is the ultimate all-in-one solution for your car.</h5> */}
                <button>
                Begin Adventure
                </button>
            </div>
        </div>
    </header>
    {/* <Image 
          src="/bg.jpg" 
          width={500}
          height={500}
          alt="Picture of the author"
        /> */}
    </>
  )
}

export default page