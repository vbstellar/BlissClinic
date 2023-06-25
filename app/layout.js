import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div>
      <Nav />
      <body className={inter.className}>{children}</body>
      <Footer />
    </div>
  );
}
