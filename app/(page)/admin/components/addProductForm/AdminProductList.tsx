"use client";
import { getAdminProducts, deleteProduct } from "@/app/services/adminApi";
import { productsType } from "@/app/types/Types";
import Container from "@/app/ui/container";
import { useEffect, useState } from "react";
import EditProductModal from "../editProductModal/EditProductModal";
import AddProductModal from "../addProductModal/AddProductModal";

export default function AdminProductList() {
  const [editingProduct, setEditingProduct] = useState<productsType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<productsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAdminProducts();
      setProducts(data);
    } catch (err) {
      setError("Failed to fetch products. Please try again.");
      console.error("Error in Getproducts", err);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }
    try {
      setDeleteLoading(id);
      setError(null);
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError("Failed to delete product. Please try again.");
      console.error("Error in Delete", err);
    } finally {
      setDeleteLoading(null);
    }
  };

  const openEditModal = (product: productsType) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setEditingProduct(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) return <div className="miniloader"></div>;

  return (
    <Container>
      {error && <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}
      <div className="flex justify-end mb-8">
        <button onClick={() => setIsAddOpen(true)} className="bg-green-600 text-white px-8 py-4 font-bold cursor-pointer rounded hover:bg-green-700 transition">
          Add new product
        </button>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 shadow2 bg-[#fff] rounded flex justify-between items-center">
            <div>
              <img src={`${product.image}`} className="rounded-[1rem] w-[8rem] mb-[1rem]" alt="" />
              <h3 className="text-gray-800 font-semibold text-[1.2rem]">{product.title}</h3>
              <p className="text-gray-800 fon-semfont-semibold text my-[.4rem]">
                price: <span className="font-semibold text-red-500">{product.price}</span>
              </p>
              <p className="text-gray-800 fon-semfont-semibold my-[.4rem]">
                stockQuantity: <span className="font-semibold text-red-500">{product.stockQuantity}</span>
              </p>
              <p className="text-gray-800 fon-semfont-semibold my-[.4rem]">
                status: <span className={`font-semibold ${product.stock ? "text-green-500" : "text-red-500"}`}>{product.stock ? "In Stock" : "Out of Stock"}</span>
              </p>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <button onClick={() => openEditModal(product)} className="bg-blue-500 cursor-pointer w-[10rem] text-white px-4 py-3 rounded hover:bg-blue-600 transition">
                Edit
              </button>
              <button onClick={() => handleDelete(product.id)} disabled={deleteLoading === product.id} className="bg-red-500 cursor-pointer w-[10rem] text-white px-4 py-3 rounded hover:bg-red-600 transition disabled:opacity-50">
                {deleteLoading === product.id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {editingProduct && <EditProductModal isOpen={isModalOpen} onClose={closeModal} onUpdated={fetchProducts} product={editingProduct} />}
      <AddProductModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} onCreated={fetchProducts} />
    </Container>
  );
}
