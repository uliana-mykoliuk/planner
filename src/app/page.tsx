"use client";
import HeroSection from "@/components/hero.components";
import Navbar from "@/components/navbar.components";
import Features from "@/components/features.components";
import Footer from "@/components/footer.components";
import ContactUs from "@/components/contact-us.components";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <ContactUs />
      <Footer />
    </>
  );
}
