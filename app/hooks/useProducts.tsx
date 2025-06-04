import { useEffect, useState } from "react";
import { productsType } from "../types/Types";

const useProducts = (searchTerm = "", page = 1, limit = 5) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // search سمت سرور
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const params = new URLSearchParams();

        if (searchTerm) {
          params.append("title", searchTerm);
        }
        const url = `${baseUrl}?${params.toString()}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Errors");
        const data = await res.json();

        setAllProducts(data);
        setError("");
      } catch {
        setError("Error");
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [searchTerm]);

  // pagination سمت کلاینت
  const start = (page - 1) * limit;
  const end = start + limit;
  const currentPageProducts = allProducts.slice(start, end) as productsType[];
  const totalPages = Math.ceil(allProducts.length / limit);

  return { products: currentPageProducts, loading, error, totalPages };
};

export default useProducts;
