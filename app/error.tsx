"use client";

import Title from "@/app/components/title/Title";

export default function Error({ error }: { error: Error }) {
  return <Title style=" text-red-500 mt-[12rem] mb-[12rem] font-bold text-[2rem] text-center ">{error.message}</Title>;
}
