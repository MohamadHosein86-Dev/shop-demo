"use client";

import Container from "@/app/ui/container";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  stock: number;
  rating: number;
};

export default function AdminProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("خطا در دریافت محصولات", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`http://localhost:3001/products/${id}`, {
        method: "DELETE"
      });
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(" Error in Delete  ", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;

  return (
    <Container>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <h3 className="font-bold">{product.title}</h3>
              <p>قیمت: {product.price} تومان</p>
              <p>موجودی: {product.stock}</p>
            </div>
            <button onClick={() => handleDelete(product.id)} className="bg-red-500 cursor-pointer text-white px-4 py-1 rounded">
              حذف
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
}
