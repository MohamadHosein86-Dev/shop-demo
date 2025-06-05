import React from "react";
import Container from "@/app/ui/container";
import Search from "../search/search";
import { getProducts } from "@/app/services/api";
import ClientPagination from "../clientpagination/ClientPagination";

interface ProductLayoutProps {
  searchParams: {
    search?: string;
  };
}

export default async function ProductLayout({ searchParams }: ProductLayoutProps) {
  const search = searchParams.search || "";
  const products = await getProducts(search);

  return (
    <Container>
      <Search search={search} />
      <ClientPagination products={products} />
    </Container>
  );
}
