"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import Dashboard from "./(dashboard)/page";
import MainPage from "@/components/MainPage";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {

  // Optimized scroll function
  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => scrollToSection("dashboard");

  return (
    <div className="bg-black relative min-h-screen">
      {/* Navbar & Main Page */}
      <Navbar scrollToSection={handleScroll} />
      <MainPage scrollToSection={handleScroll} />

      {/* Dashboard Section */}
      <section id="dashboard" className="min-h-screen">
        <Dashboard />
      </section>

      {/* Footer */}
      <Footer title={"Developer Toolkit"} />

      {/* Background Image */}
      <div className="fixed inset-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill={true}  // ✅ Fixed for Next.js 13+
          objectFit="cover"
          className="opacity-30 max-h-screen"
        />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
