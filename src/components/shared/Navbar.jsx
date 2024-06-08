"use client";
import React from "react";
import "@/components/styles/navbar.css";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Shop from "./shop";
const Navbar = ({cartItems,setCartVisibility}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <h2>DriveLux</h2>
        <ul className={isOpen ? "menu active:" : "menu"}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>

          <Link href="/products">
            <li>Products</li>
          </Link>
          <FaShoppingCart className="cart-icon"/>
        </ul>
        
        <IoIosMenu className="menu-icon" size={30} onClick={toggle} />
       
       
        
      </nav>
    </>
  );
};

export default Navbar;
