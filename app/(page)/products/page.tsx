import ProductLayout from "@/app/components/productlayout/ProductLayout";
import Title from "@/app/components/title/Title";
import Container from "@/app/ui/container";

interface ProductsPageProps {
  searchParams: {
    search?: string;
    page?: string;
  };
}

export default async function ProductPage({ searchParams }: ProductsPageProps) {
  return (
    <Container>
      <Title style="font-bold text-center text-[2rem] ">Shop</Title>
      <ProductLayout searchParams={searchParams} />
    </Container>
  );
}
