"use client";
import React, { useState } from "react";
import Product from "../product/Product";
import useProducts from "@/app/hooks/useProducts";
import Container from "@/app/ui/Container";
import Pagination from "../pagination/Pagination";
import Search from "../search/search";
import Link from "next/link";

export default function ProductLayout() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { products, totalPages } = useProducts(search, page);

  return (
    <Container>
      <Search search={search} setSearch={setSearch} />
      <div className="  grid grid-cols-3 mt-[4rem] items-center w-full mx-auto justify-center gap-[2rem] ">
        {products.map((res) => (
          <Link key={res.id} href={`products/${res.id}`}>
            <Product product={res} />
          </Link>
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </Container>
  );
}
