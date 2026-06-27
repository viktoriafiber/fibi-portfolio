import Hero from "@/components/hero/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import About from "@/components/sections/About";
import Archive from "@/components/sections/Archive";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/layout/Footer";
import SiteHeader from "@/components/layout/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative min-h-screen pb-10">
        <Hero />
        <SelectedWork />
        <About />
        <Archive />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}
