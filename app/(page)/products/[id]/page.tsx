import AddToCart from "@/app/components/addtocart/AddToCart";
import { getProduct } from "@/app/services/api";
import { productsType } from "@/app/types/Types";
import Container from "@/app/ui/container";

interface ProductPageProps {
  params: {
    id: string;
  };
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const data = (await getProduct(id)) as productsType;
  return (
    <Container>
      <div className=" flex mt-[4rem] gap-[2rem]  ">
        <div className=" bg-[#fff]  pb-[8rem] pt-6  justify-center rounded-[1rem] basis-[40%] flex  ">
          <img className="  w-[28rem] rounded-[1rem] " src={`${data.image}`} alt="" />
        </div>
        <div className=" bg-[#fff] p-4 rounded-[1rem] text-[2rem] flex flex-col justify-between  basis-[50%] ">
          <h2>{data.title}</h2>
          <p></p>
          <AddToCart product={data} />
        </div>
      </div>
    </Container>
  );
}
