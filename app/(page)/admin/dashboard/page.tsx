"use client";
import { useState } from "react";
import AddProductForm from "../components/addProductForm/AddProductForm";
import ProductListAdmin from "../components/productList/ProductListAdmin";
import Title from "@/app/components/title/Title";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    // شبیه سازی یک تاخیر 2 ثانیه ای مثل درخواست به سرور
    setTimeout(() => {
      setLoading(false);
      if (password === "admin123" && email === "admin@gmail.com") {
        setIsLoggedIn(true);
      } else {
        alert("رمز عبور یا ایمیل اشتباه است");
      }
    }, 2000);
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-sm mx-auto mt-20 space-y-4 p-4 rounded shadow">
        <h2 className="text-xl font-bold">ورود ادمین</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 w-full" disabled={loading} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 w-full" disabled={loading} />
        <button onClick={handleLogin} className="bg-blue-600 cursor-pointer text-white px-4 py-2 pb-[.8rem] rounded w-full" disabled={loading}>
          {loading ? "در حال ورود..." : "ورود"}
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Title style="text-2xl text-center font-bold mb-4"> Admin Panel </Title>
      <AddProductForm />
      <ProductListAdmin />
      سسسسسس
    </div>
  );
}
