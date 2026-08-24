import Navbar from "@/components/bkbh/Navbar";
import Hero from "@/components/bkbh/Hero";
import Stats from "@/components/bkbh/Stats";
import PressNews from "@/components/bkbh/PressNews";
import Testimonials from "@/components/bkbh/Testimonials";
import IntakeForm from "@/components/bkbh/IntakeForm";
import About from "@/components/bkbh/About";
import Services from "@/components/bkbh/Services";
import Eligibility from "@/components/bkbh/Eligibility";
import Gallery from "@/components/bkbh/Gallery";
import Footer from "@/components/bkbh/Footer";
import FloatingWhatsApp from "@/components/bkbh/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Fokus utama: Berita → Testimoni → Pendaftaran */}
        <Hero />
        <Stats />
        <PressNews />
        <Testimonials />
        <IntakeForm />
        {/* Konteks pendukung */}
        <About />
        <Services />
        <Eligibility />
        <Gallery />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
