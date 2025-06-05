"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

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
    <form onSubmit={handleSubmit} className=" mt-[2rem] mx-auto flex gap-[.5rem] items-center flex-col ">
      <Input type="text" placeholder="Search..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} variant="search" className=" mx-auto w-[50%]" />
      <div className=" w-[50%] flex justify-center ">
        <Button variant="default" type="submit">
          Search
        </Button>
      </div>
    </form>
  );
}
