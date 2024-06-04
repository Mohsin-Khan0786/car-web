import React from 'react'
import '@/components/styles/home.css'
import Link from 'next/link'

const Home = () => {
  return (
    <>
    <header>
        <div className="container">
            <div className="headercontent">
                <h1>Discover the Ultimate Driving Experience with DriveLux</h1>
                <Link href='/products'>
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

export default Home