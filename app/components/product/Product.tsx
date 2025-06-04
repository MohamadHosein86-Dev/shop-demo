import { productsType } from "@/app/types/Types";

interface PropsType {
  product: productsType;
}
export default function Product({ product }: PropsType) {
  return (
    <div className=" pb-[1.5rem] shadow2 text-center rounded-[.5rem] w-[80%] bg-[#ffff] ">
      <img className=" rounded-[.5rem] w-full " src={product.image} alt="" />
      <h2 className=" my-[1rem] ">{product.title}</h2>
      <p>{product.price}</p>
    </div>
  );
}
