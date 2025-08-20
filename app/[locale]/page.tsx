import type { Metadata } from "next"
import HeroSection from "@/app/components/hero-section"
import NewConstructionSection from "@/app/components/new-construction-section"
import OperatingSection from "@/app/components/operating-section"
import RestaurantsSection from "@/app/components/restaurants-section"
import ServicesSection from "@/app/components/services-section"
import DeliverySection from "@/app/components/delivery-section"
import ContactSection from "@/app/components/contact-section"
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"

export const metadata: Metadata = {
  title: "Hotel Supply | B2B Services for the Hospitality Industry",
  description:
    "Premium supplies and services for hotels, restaurants, and bars. From new construction to ongoing operations, we're your trusted partner.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Navbar />
      <HeroSection />
      <NewConstructionSection />
      <OperatingSection />
      <RestaurantsSection />
      <ServicesSection />
      <DeliverySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
