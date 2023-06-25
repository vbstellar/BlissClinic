import Image from "next/image";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <Carousel />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
