import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Ecosystem from "@/components/ecosystem/Ecosystem";
import About from "@/components/about/About";
import Presentation from "@/components/presentation/Presentation";
import Partners from "@/components/partners/Partners";
import FinalCTA from "@/components/cta/FinalCTA";
import Footer from "@/components/footer/Footer";

export default function StoicRoomPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Presentation />
        <Ecosystem />
        <About />
        <FinalCTA />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
