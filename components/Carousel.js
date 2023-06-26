import C1 from "../public/Cimg.jpg";
import C2 from "../public/Cimg(1).jpg";
import Image from "next/image";

const Carousel = () => {
  return (
    <div>
      <div className="block sm:hidden">
        <Image src={C1} className="w-full h-1/2"></Image>
      </div>
      <div className="hidden sm:block">
        <Image src={C2} className="w-full h-1/2"></Image>
      </div>
    </div>
  );
};

export default Carousel;
