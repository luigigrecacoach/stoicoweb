import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Presentation from "@/components/presentation/Presentation";
import QuickNav from "@/components/quick-nav/QuickNav";
import Coaching from "@/components/coaching/Coaching";
import About from "@/components/about/About";
import MarcusAurelius from "@/components/marcus-aurelius/MarcusAurelius";
import StoicRoom from "@/components/stoic-room/StoicRoom";
import Calendly from "@/components/calendly/Calendly";
import ShopPreview from "@/components/shop/ShopPreview";
import StoicHall from "@/components/stoic-hall/StoicHall";
import Partners from "@/components/partners/Partners";
import Footer from "@/components/footer/Footer";

export default function StoicRoomPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Presentation />
        <QuickNav />
        <About />
        <MarcusAurelius />
        <Coaching />
        <StoicRoom />
        <ShopPreview />
        <Calendly />
        <StoicHall />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
