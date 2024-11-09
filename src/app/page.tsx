"use client"

import SocialMediaLinks from "@/components/SocialMediaLinks";
import Image from "next/image";
import AnunciosFiltros from "@/components/AnunciosFiltro";
export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen">
        <SocialMediaLinks/>
        <AnunciosFiltros/>
      </div>
    </main>
  );
}
