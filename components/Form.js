import EmailSVG from "../public/mail.svg";
import PhoneSVG from "../public/call.svg";
import LocationSVG from "../public/location.svg";
import Image from "next/image";

export default function Form() {
  return (
    <div className="grid grid-cols-1 gap-y-10 md:py-10 md:mx-24">
      <div className="flex md:justify-start md:items-start justify-center items-center">
        <Image src={LocationSVG} className="h-10 w-10 mx-2" />
        <h1 className="mt-2">
          R 674,basement, near DI khan school, New Rajinder Nagar
        </h1>
      </div>
      <a
        href="tel:7011806146"
        className="flex md:justify-start md:items-start justify-center items-center"
      >
        <Image src={PhoneSVG} className="h-10 w-10 mx-2" />
        <h1 className="mt-2 ">7011806146</h1>
      </a>
      <div className="flex md:justify-start md:items-start justify-center items-center">
        <Image src={EmailSVG} className="h-10 w-10 mx-2" />
        <h1 className="mt-2">bliss@gmail.com</h1>
      </div>
    </div>
  );
}
