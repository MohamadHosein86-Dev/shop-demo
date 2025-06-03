import { productsType } from "@/app/types/Types";

interface PropsType {
  products: productsType;
}
export default function Product({ products }: PropsType) {
  return (
    <div>
      <h2>{products.name}</h2>
    </div>
  );
}
