import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      {/* Chicken Head Logo */}
      <div className="mb-8">
        <Image src="/chicken-logo.png" alt="Chicken Logo" width={150} height={150} />
      </div>
      
      {/* Portfolio Heading */}
      <h1 className="text-5xl font-bold tracking-wide">Zac Simmonds</h1>
      <p className="text-xl mt-4 opacity-80">Mechanical & Firmware</p>
      
      {/* Navigation Links */}
      <nav className="mt-8 flex space-x-6 text-lg">
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      
      {/* Placeholder Sections */}
      <div id="projects" className="w-full mt-20 max-w-4xl">
        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">Projects</h2>
        <p className="mt-4 opacity-70">...</p>
      </div>
      
      <div id="about" className="w-full mt-20 max-w-4xl">
        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">About Me</h2>
        <p className="mt-4 opacity-70">Engineering solutions for real-world problems.</p>
      </div>
      
      <div id="contact" className="w-full mt-20 max-w-4xl">
        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">Contact</h2>
        <p className="mt-4 opacity-70">Email: zac.s@me.com</p>
      </div>
    </div>
  );
}