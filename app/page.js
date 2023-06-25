import Image from "next/image";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <div id="section1">
        <Carousel />
      </div>
      <div id="section2">
        <About />
      </div>
      <div id="section3">
        {" "}
        <Services />
      </div>
      <div id="section4">
        <Contact />
      </div>
    </main>
  );
}
