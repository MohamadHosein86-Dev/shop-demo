"use client";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { cart } = useCart();

  const indexcart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className=" flex items-center justify-between ">
      <h1 className=" text-blue-600 font-bold text-[1.8rem] ">Shop Demo</h1>
      <ul className=" hidden  md:flex font-bold text-blue-600 text-[1.4rem] items-center justify-center gap-[1.8rem] ">
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>Shop</Link>
        <Link href={"/admin/dashboard"}> Login </Link>
        <Link href={"/contact-us"}>Contact Us</Link>
      </ul>

      <Link href={"/shopingcart"} className="relative flex items-center space-x-2 h-[3.5rem] w-[3.5rem] border-stone-200 rounded-full p-2  border-1 justify-center hover:bg-gray-200 hover:text-gray-700 hover:cursor-pointer">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-gray-600" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
          <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
        </svg>
        <span className="absolute top-0 right-0 bg-[#1D74D2] text-white text-xs rounded-full w-5 pb-[1px] h-5 flex items-center justify-center">{indexcart}</span>
      </Link>
    </div>
  );
}
