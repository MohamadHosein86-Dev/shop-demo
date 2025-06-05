"use client";

import React, { useState } from "react";
import { productsType } from "@/app/types/Types";
import Product from "../product/Product";
import Link from "next/link";
import Pagination from "../pagination/Pagination";

interface PropsType {
  products: productsType[];
}

export default function ClientPagination({ products }: PropsType) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className=" ">
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 mt-[4rem] items-center w-full mx-auto justify-center gap-[2rem]">
        {currentProducts.map((product) => (
          <Link key={product.id} href={`products/${product.id}`}>
            <Product product={product} />
          </Link>
        ))}
      </div>
      <Pagination page={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
