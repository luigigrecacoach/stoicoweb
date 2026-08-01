import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Presentation from "@/components/presentation/Presentation";
import About from "@/components/about/About";
import MarcusAurelius from "@/components/marcus-aurelius/MarcusAurelius";
import Calendly from "@/components/calendly/Calendly";
import Partners from "@/components/partners/Partners";
import Footer from "@/components/footer/Footer";

export default function StoicRoomPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Presentation />
        <About />
        <MarcusAurelius />
        <Calendly />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
