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
        <div className="w-full z-[10000] flex mx-auto flex-col gap-4 items-center sm:items-stretch">
          <div className="flex items-center mx-auto gap-4">
            <button onClick={() => addToCart(product)} className="w-12  cursor-pointer pb-[4px]  sm:w-20 h-12 text-2xl font-bold bg-[#2A4FB5] text-white rounded-lg hover:bg-[#1A3D8B] transition transform hover:scale-105">
              +
            </button>
            <div className="text-xl font-bold text-red-500">{quantity}</div>
            <button onClick={() => decrementQuantity(product.id)} className="w-12  pb-[4px] cursor-pointer sm:w-20 h-12 text-2xl font-bold bg-[#2A4FB5] text-white rounded-lg hover:bg-[#1A3D8B] transition transform hover:scale-105">
              -
            </button>
          </div>
          <button onClick={() => removeFromCart(product.id)} className="w-full cursor-pointer  sm:w-auto px-6 py-3 text-lg bg-red-500 text-white rounded-lg hover:bg-red-600 transition transform hover:scale-105">
            Remove
          </button>
        </div>
      ) : (
        <div className="w-full">
          <button onClick={() => addToCart(product)} className="w-full text-lg bg-[#2A4FB5] text-white py-3 rounded-lg hover:bg-[#1A3D8B] transition transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      )}
    </Fragment>
  );
}
