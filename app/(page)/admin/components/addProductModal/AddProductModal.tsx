"use client";
import { createProduct } from "@/app/services/adminApi";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be positive"),
  stock: z.boolean(),
  stockQuantity: z.number().min(0, "Stock quantity must be positive"),
  image: z.string().min(1, "Image URL is required"),
  rating: z.number().min(0).max(5),
  brand: z.string().min(1, "Brand is required"),
  category: z.string().min(1, "Category is required")
});
type ProductFormData = z.infer<typeof productSchema>;
interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreated: () => void;
}

export default function AddProductModal({ isOpen, onClose, onCreated }: AddProductModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      stock: true
    }
  });

  useEffect(() => {
    if (isOpen) {
      reset();
      setError(null);
      setSuccess(false);
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: ProductFormData) => {
    try {
      setIsLoading(true);
      setError(null);
      await createProduct(data);
      setSuccess(true);
      setTimeout(() => {
        onCreated();
        onClose();
      }, 1000);
    } catch (error) {
      setError("Failed to create product. Please try again.");
      console.error("Error creating product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-blue-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
        {error && <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}
        {success && <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">Product created successfully!</div>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input {...register("title")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea {...register("description")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" step="0.01" {...register("price", { valueAsNumber: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
            <input type="number" {...register("stockQuantity", { valueAsNumber: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            {errors.stockQuantity && <p className="mt-1 text-sm text-red-600">{errors.stockQuantity.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input {...register("image")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input type="number" step="0.1" {...register("rating", { valueAsNumber: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            {errors.rating && <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Brand</label>
            <input {...register("brand")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            {errors.brand && <p className="mt-1 text-sm text-red-600">{errors.brand.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input {...register("category")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>}
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" {...register("stock")} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label className="text-sm font-medium text-gray-700">In Stock</label>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button type="button" onClick={onClose} disabled={isLoading} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50">
              Cancel
            </button>
            <button type="submit" disabled={isLoading} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
              {isLoading ? "Creating..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
