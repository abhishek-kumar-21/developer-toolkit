"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Dashboard from "./(dashboard)/page";
import MainPage from "@/components/MainPage";
import NotFound from "@/app/not-found";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {

  // const dashboardRef = useRef(null); // for scrolling to the Dashboard section when clicked

  // const scrollToSection = () => {
  //   if (dashboardRef.current) {
  //     dashboardRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <div className="bg-black">

      <Navbar scrollToSection={() => scrollToSection("dashboard")} />
      <MainPage scrollToSection={() => scrollToSection("dashboard")} />

      {/* Dashboard Section */}
      <section id="dashboard" className="min-h-screen">
        <Dashboard />
      </section>

      <Footer title={"Developer Toolkit"} />


      {/* Handling background Image */}
      <div className="fixed inset-0">
        <Image
          src="/bg.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          className="opacity-30 max-h-screen"
        />
      </div>

      <ScrollToTop/>

    </div>
  );
}
