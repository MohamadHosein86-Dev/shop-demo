import ProductLayout from "@/app/components/productlist/ProductList";
import Title from "@/app/components/title/Title";
import Container from "@/app/ui/Container";

export default async function ProductPage() {
  return (
    <Container>
      <Title text="Shop" />
      <ProductLayout />
    </Container>
  );
}
