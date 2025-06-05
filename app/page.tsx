import { Fragment } from "react";
import Title from "./components/title/Title";
import Container from "./ui/container";
import ProductLayout from "./components/productlayout/ProductLayout";

interface ProductsPageProps {
  searchParams: {
    search?: string;
    page?: string;
  };
}

export default function Home({ searchParams }: ProductsPageProps) {
  return (
    <Container>
      <Fragment>
        <Title style="font-bold text-center mt-[1rem] text-[2rem] ">Welecome to Shop Demo</Title>
      </Fragment>
      <ProductLayout searchParams={searchParams} />
    </Container>
  );
}
