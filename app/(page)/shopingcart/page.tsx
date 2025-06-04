"use client";
import AddToCart from "@/app/components/addtocart/AddToCart";
import { useCart } from "@/app/context/CartContext";
import Container from "@/app/ui/container";
import Link from "next/link";

export default function Shopingcart() {
  const { cart } = useCart();
  return (
    <Container>
      <div className="  grid grid-cols-3 mt-[4rem] items-center w-full mx-auto justify-center gap-[2rem] ">
        {cart.map((res) => (
          <Link key={res.id} href={`products/${res.id}`}>
            <div className=" pb-[1.5rem] shadow2 text-center rounded-[.5rem] w-[80%] bg-[#ffff] ">
              <img className=" rounded-[.5rem] w-full " src={res.image} alt="" />
              <h2 className=" my-[1rem] ">{res.title}</h2>
              <p>{res.price}</p>
              <AddToCart product={res} />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
