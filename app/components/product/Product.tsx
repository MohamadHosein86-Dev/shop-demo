import { productsType } from "@/app/types/Types";
import Link from "next/link";

interface PropsType {
  product: productsType;
}
export default function Product({ product }: PropsType) {
  return (
    <Link href={`${product.id}`}>
      <div className=" pb-[1.5rem] shadow2 text-center  rounded-[.5rem] w-full  bg-[#ffff] ">
        <img className=" rounded-[.5rem] w-full " src={product.image} alt="" />
        <div className=" py-2 ">
          <h2 className=" text-blue-500 font-bold md:text-[1.4rem] text-[1.2rem]  my-[1.8rem] ">{product.title}</h2>
          <Link href={""}> </Link>
          <p className=" mt-[.5rem]  text-[1.2rem] text-gray-600 font-bold mb-[2rem] ">
            {" "}
            barnd : <span className=" font-normal text-gray-600">{product.brand}</span>
          </p>
          <p className=" text-blue-500 font-bold md:text-[1.4rem] text-[1rem] ">{product.price}</p>
        </div>
      </div>
    </Link>
  );
}
