"use client";
import { useState } from "react";
import AddProductForm from "./addProductForm/AddProductForm";
import Title from "@/app/components/title/Title";
import Container from "@/app/ui/container";
import MiniLoader from "@/app/components/miniLoader/miniLoader";

export default function AdminDashboard() {
  const [password, setPassword] = useState("admin123");
  const [email, setEmail] = useState("admin@gmail.com");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
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
      <Container>
        <div className="max-w-sm mx-auto mt-20 space-y-4 p-4 rounded shadow">
          <Title style="text-xl font-bold text-center "> Admin Login </Title>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 w-full rounded-sm  border-[1px] border-blue-500 " disabled={loading} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2  border-[1px] border-blue-500  w-full" disabled={loading} />
          <button onClick={handleLogin} className="bg-blue-600 cursor-pointer text-white px-4 py-2 pb-[.8rem] rounded w-full" disabled={loading}>
            {loading ? <MiniLoader /> : "ورود"}
          </button>
        </div>
      </Container>
    );
  }

  return (
    <div className="p-4">
      <Title style="text-2xl text-center font-bold my-8"> Admin Panel </Title>
      <AddProductForm />
    </div>
  );
}
