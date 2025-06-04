import { getProduct } from "@/app/services/api";
import { productsType } from "@/app/types/Types";

interface ProductPageProps {
  params: {
    id: string;
  };
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const data = (await getProduct(id)) as productsType;
  return <div>{data.price}vfbgfgg</div>;
}
