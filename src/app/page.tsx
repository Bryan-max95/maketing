import Hero from "@/app/sections/Hero";
import Services from "@/app/sections/Services";
import AboutUs from "@/app/sections/AboutUs";
import Testimonials from "@/app/sections/Testimonials";
import CtaSection from "@/app/sections/CtaSection";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Hero />
      <Services />
      <AboutUs />
      <Testimonials />
      <CtaSection />
    </main>
  );
}
