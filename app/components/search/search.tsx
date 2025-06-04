"use client";
import { ChangeEvent, FormEvent, useState } from "react";

interface PropsType {
  search: string;
  setSearch: (x: string) => void;
}

export default function Search({ search, setSearch }: PropsType) {
  const [inputValue, setInputValue] = useState(search);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSearch(inputValue);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center">
      <input placeholder="Search products names  " className="border p-2 rounded" value={inputValue} onChange={handleChange} />
      <button type="submit" className="px-3 py-1 mx-1 border rounded bg-blue-500 text-white">
        Search
      </button>
    </form>
  );
}
