"use client"
import React from 'react'
import "@/app/components/styles/navbar.css"
import { IoIosMenu } from "react-icons/io";
import Link from 'next/link';

import { useState } from "react";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
    <nav>
        <h2>DriveLux</h2>
        <ul className={isOpen ? "menu active:" : "menu"}>
<Link href='/home'>
<li>Home</li>
</Link>
<Link href='/about'>
<li>About</li>
</Link>
            
            <li>Cart</li>
        </ul>
        <IoIosMenu className="menu-icon" size={30} onClick={toggle} />
    </nav>

    </>
  )
}

export default Navbar