"use client";
import AddToCart from "@/app/components/addtocart/AddToCart";
import Title from "@/app/components/title/Title";
import { useCart } from "@/app/context/CartContext";
import Container from "@/app/ui/container";
import Link from "next/link";

export default function Shopingcart() {
  const { cart } = useCart();
  return (
    <Container>
      <div className="  grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 mt-[4rem] items-center w-full mx-auto justify-center gap-[2rem] ">
        {cart.map((res) => (
          <Link key={res.id} href={`products/${res.id}`}>
            <div className=" pb-[1.5rem] shadow2 text-center p-4 rounded-[.5rem]   bg-[#ffff] ">
              <img className=" rounded-[.5rem] w-full " src={res.image} alt="" />
              <h2 className=" font-bold my-[1rem] ">{res.title}</h2>
              <p className=" font-semibold mb-[1rem] ">{res.price}</p>
              <div className=" px-4 "></div>
              <AddToCart product={res} />
            </div>
          </Link>
        ))}
      </div>
      {cart.length === 0 && <Title style=" text-red-400 mt-[4rem] text-center   text-[2rem] font-bold ">There is no Product in Cart</Title>}
    </Container>
  );
}
