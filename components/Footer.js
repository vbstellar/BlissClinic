import logo from "../public/logo2.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer class="bg-white shadow dark:bg-royal-blue-950">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="/" class=" hidden sm:block items-center mb-4 sm:mb-0">
            <Image src={logo} className="h-12 w-12 mr-2" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Bliss Fertility Homeopathic Clinic™
            </span>
          </a>
          <a href="/" class=" block sm:hidden items-center mb-0 sm:mb-0">
            <Image src={logo} className="h-12 w-12 mr-2" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Bliss Fertility
            </span>
          </a>
          <a href="/" class=" block sm:hidden items-center mb-4 sm:mb-0">
            {/* <Image src={logo} className="h-12 w-12 mr-2" /> */}
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Homeopathic Clinic™
            </span>
          </a>
          <ul class=" items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                R-674, Basement New Rajendra Nagar
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                New Delhi, 110060
              </a>
            </li>
            <li>
              <a href="tel:7011806146" class="mr-4 hover:underline md:mr-6 ">
                7011806146
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                bliss@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm pb-2 text-gray-500 sm:text-center dark:text-gray-400">
          Site Designed and Made by:{" "}
          <a href="tel:7503909232" class="hover:underline">
            AV WebWorks™
          </a>
          .
        </span>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a class="hover:underline">Bliss Fertility Homeopathic Clinic™</a>.
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
