import ProductList from "@/app/components/productList/ProductList";
import Container from "@/app/ui/Container";

export default async function ProductPage() {
  return (
    <Container>
      <h2 className=" text-center ">Shop</h2>
      <ProductList />
    </Container>
  );
}
