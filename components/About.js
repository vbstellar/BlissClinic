import Image from "next/image";
import Doc from "../public/docImg.jpg";

export default function About() {
  return (
    <div className="p-20">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="">
          <h1 className="text-4xl text-gray-600 font-bold">Doctor</h1>
          <h1 className="text-3xl text-gray-600 font-semibold">
            Dr. Meenakshi Bagga
          </h1>
          <hr className="h-2 my-2 bg-gray-500 rounded-lg w-52" />
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint
          </p>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image src={Doc} className="h-2/3 w-2/3 rounded-full"></Image>
        </div>
      </div>
    </div>
  );
}
