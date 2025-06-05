import Container from "@/app/ui/container";
import Navbar from "@/app/components/nav/Navbar";
import React from "react";

export default function Header() {
  return (
    <header className=" bg-[#ffff] ">
      <Container>
        <Navbar />
      </Container>
    </header>
  );
}
