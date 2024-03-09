"use client";

import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Pricing */}
      <Pricing />

      {/* NewsLetter */}
      <Newsletter />
    </div>
  );
}
