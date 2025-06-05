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
      <div className=" flex flex-col xl:flex-row mt-[4rem] justify-center gap-[2rem]  ">
        <div className=" bg-[#fff]  pb-[4rem] h-[60%] pt-6  justify-center rounded-[1rem] basis-[35%] flex  ">
          <img className="  w-[25rem] rounded-[1rem] " src={`${data.image}`} alt="" />
        </div>
        <div className=" bg-[#fff]    h-[40%] p-4 rounded-[1rem]  flex flex-col   basis-[50%] ">
          <div className="     p-4 ">
            <h2 className=" font-bold text-[1.8rem]  text-blue-500 mb-[1.5rem] ">{data.title}</h2>
            <p className=" mt-[.5rem]  text-[1.2rem] text-gray-600 font-semibold mb-[2rem] "> {data.description}</p>

            <p className=" mt-[.5rem] text-[1.3rem]  ">
              <span className=" font-bold ">brand :</span> {data.brand}
            </p>
            <p className=" mt-[.5rem] text-[1.3rem]  ">
              <span className=" font-bold ">stockQuantity :</span> {data.stockQuantity}
            </p>
            <p className="   text-[1.3rem]  mb-[4rem] ">
              <span className=" font-bold ">category :</span> {data.category}
            </p>

            <p className=" font-bold text-[2.4rem]  text-blue-500 mb-[1.5rem] ">{data.price}</p>
          </div>
          <AddToCart product={data} />
        </div>
      </div>
    </Container>
  );
}
