import Navbar from "@/components/bkbh/Navbar";
import Hero from "@/components/bkbh/Hero";
import Stats from "@/components/bkbh/Stats";
import About from "@/components/bkbh/About";
import Services from "@/components/bkbh/Services";
import Eligibility from "@/components/bkbh/Eligibility";
import Gallery from "@/components/bkbh/Gallery";
import PressNews from "@/components/bkbh/PressNews";
import Testimonials from "@/components/bkbh/Testimonials";
import IntakeForm from "@/components/bkbh/IntakeForm";
import Footer from "@/components/bkbh/Footer";
import FloatingWhatsApp from "@/components/bkbh/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Eligibility />
        <Gallery />
        <PressNews />
        <Testimonials />
        <IntakeForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
