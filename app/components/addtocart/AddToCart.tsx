"use client";

import { useCart } from "@/app/context/CartContext";
import { productsType } from "@/app/types/Types";
import { Fragment } from "react";

interface PropsType {
  product: productsType;
}
export default function AddToCart({ product }: PropsType) {
  const { addToCart, decrementQuantity, removeFromCart, cart } = useCart();

  const item = cart.find((p) => p.id === product.id);
  const quantity = item ? item?.quantity : 0;

  return (
    <Fragment>
      {quantity !== 0 ? (
        <div className="  mx-auto flex-col flex gap-[1rem] ">
          <div className=" flex items-center gap-[1rem] ">
            <button onClick={() => addToCart(product)} className="  w-[6rem] font-semibold text-[28px] bg-[#2A4FB5] text-white py-3 px-6 rounded-lg hover:bg-[#1A3D8B] transition duration-200 transform hover:scale-101 hover:cursor-pointer">
              +
            </button>
            <div className=" font-bold text-red-500 ">{quantity}</div>
            <button onClick={() => decrementQuantity(product.id)} className="  w-[6rem] font-semibold text-[28px] bg-[#2A4FB5] text-white py-3 px-6 rounded-lg hover:bg-[#1A3D8B] transition duration-200 transform hover:scale-101 hover:cursor-pointer">
              -
            </button>
          </div>
          <button onClick={() => removeFromCart(product.id)} className=" w-full text-[22px] bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-[#1A3D8B] transition duration-200 transform hover:scale-101 hover:cursor-pointer">
            Remov to Cart
          </button>
        </div>
      ) : (
        <div className=" flex justify-center ">
          <button onClick={() => addToCart(product)} className=" w-[60%]  text-[22px] bg-[#2A4FB5] text-white py-3 px-6 rounded-lg hover:bg-[#1A3D8B] transition duration-200 transform hover:scale-101 hover:cursor-pointer">
            Add to Cart
          </button>
        </div>
      )}
    </Fragment>
  );
}
