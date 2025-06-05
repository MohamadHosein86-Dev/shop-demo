"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const schema = z.object({
  title: z.string().min(1, "عنوان الزامی است"),
  price: z.coerce.number().min(0, "قیمت باید عددی مثبت باشد"),
  stockQuantity: z.coerce.number().min(0, "موجودی باید عددی مثبت باشد"),
  image: z.string().url("لینک عکس معتبر نیست"),
  description: z.string().min(5, "حداقل ۵ کاراکتر"),
  productCode: z.coerce.number().min(0),
  brand: z.string().min(1),
  inStock: z.boolean(),
  category: z.string().min(1)
});
type ProductFormValues = z.infer<typeof schema>;
type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreated: () => void;
};

export default function AddProductModal({ isOpen, onClose, onCreated }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ProductFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      price: 0,
      stockQuantity: 0,
      image: "",
      description: "",
      productCode: 0,
      brand: "",
      inStock: true,
      category: ""
    }
  });

  useEffect(() => {
    if (isOpen) reset();
  }, [isOpen, reset]);
  const onSubmit = async (values: ProductFormValues) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!res.ok) throw new Error("خطا در ساخت محصول");

      onCreated();
      onClose();
    } catch (err) {
      console.error("خطا در ساخت", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 glass-background bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-blue-400 text-white p-6 rounded w-[100%] max-w-md shadow">
        <h2 className="text-xl font-bold text-center mb-[1.5rem]">Create New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-[80%] mx-auto">
          <div className="flex gap-4">
            <label>Title:</label>
            <input {...register("title")} className="input border-[1px] pl-[.7rem] rounded-[5px] py-[4px] cursor-pointer" />
          </div>
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

          <div className="flex gap-4">
            <label>Description:</label>
            <input {...register("description")} className="input border-[1px] pl-[.7rem] rounded-[5px] py-[4px] cursor-pointer" />
          </div>
          <div className="flex gap-4">
            <label>Product Code:</label>
            <input type="number" {...register("productCode")} className="input border-[1px]  px-[.5rem] rounded-[5px] py-[5px] cursor-pointer" />
          </div>
          <div className="flex gap-4">
            <label>Brand:</label>
            <input {...register("brand")} className="input border-[1px] pl-[.7rem] rounded-[5px] py-[4px] cursor-pointer" />
          </div>
          <div className="flex gap-4 items-center">
            <label>In Stock:</label>
            <input type="checkbox" {...register("inStock")} className="scale-125" />
          </div>
          <div className="flex gap-4">
            <label>Category:</label>
            <input {...register("category")} className="input border-[1px] pl-[.7rem] rounded-[5px] py-[4px] cursor-pointer" />
          </div>
          <div className="flex gap-4">
            <label>Price:</label>
            <input type="number" {...register("price")} className="input border-[1px] px-[.7rem] rounded-[5px] py-[5px] w-[8rem] cursor-pointer text-white" />
          </div>
          <div className="flex gap-4">
            <label>Stock Quantity:</label>
            <input type="number" {...register("stockQuantity")} className="input border-[1px] px-[.7rem] rounded-[5px] py-[5px] w-[6rem] cursor-pointer" />
          </div>
          <div>
            <label>Image Link:</label>
            <input {...register("image")} className="input border-[1px] mt-[.5rem] pl-[.7rem] rounded-[5px] py-[4px] cursor-pointer w-full" />
          </div>
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}

          <div className="flex justify-between mt-5">
            <button type="button" onClick={onClose} className="px-5 py-2 bg-[#ffff] cursor-pointer text-black rounded">
              Close
            </button>
            <button type="submit" className="px-5 py-2 bg-green-600 text-white cursor-pointer rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
