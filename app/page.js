import Image from "next/image";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Carousel />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
