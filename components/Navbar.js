import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo2.png";

const Nav = () => {
  return (
    <>
      <nav className="flex items-center flex-wrap bg-royal-blue-900 p-3 ">
        <Link href="/" className="inline-flex items-center p-2 mr-4 ">
          <Image src={logo} className="h-12 w-12 mr-2" />
          <span className="text-2xl text-white font-medium uppercase tracking-wide">
            Bliss Fertility Homeopathic Clinic
          </span>
        </Link>

        <div className="w-full lg:inline-flex lg:flex-grow lg:w-auto">
          {/* <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link
              href="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-royal-blue-600 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-royal-blue-600 hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-royal-blue-600 hover:text-white"
            >
              About us
            </Link>
            <Link
              href="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-royal-blue-600 hover:text-white"
            >
              Contact us
            </Link>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Nav;
