"use client";
import HeroSection from "@/components/hero.components";
import Header from "@/components/navbar.components";
import Features from "@/components/features.components";
import Footer from "@/components/footer.components";
import ContactUs from "@/components/contact-us.components";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <ContactUs />
      <Footer />
    </>
  );
}
