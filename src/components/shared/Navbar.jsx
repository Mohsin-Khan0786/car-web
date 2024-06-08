"use client";

import React from "react";
import "@/components/styles/navbar.css";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useStore } from "@/context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { cart } = useStore();

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

          <Link
            href="/cart"
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <FaShoppingCart className="cart-icon" />
            <p
              style={{
                color: "white",
              }}
            >
              {cart.length}
            </p>
          </Link>
        </ul>

        <IoIosMenu className="menu-icon" size={30} onClick={toggle} />
      </nav>
    </>
  );
};

export default Navbar;
