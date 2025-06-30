"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Dashboard from "./dashboard/page";
import MainPage from "@/components/MainPage";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="bg-black relative min-h-screen">
      <Navbar />
      <MainPage />
      <Dashboard />
      <Footer title="Developer Toolkit" />

      {/* Background Image */}
      <div className="fixed inset-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill={true}
          objectFit="cover"
          className="opacity-30 max-h-screen"
        />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
