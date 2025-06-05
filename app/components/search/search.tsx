"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

interface PropsType {
  search: string;
}

export default function Search({ search }: PropsType) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState(search);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/products?${createQueryString("search", inputValue)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-[2rem] space-x-2">
      <input type="text" placeholder="Search..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-[50%] border-[1px] border-blue-500 p-2 rounded" />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
        Search
      </button>
    </form>
  );
}
