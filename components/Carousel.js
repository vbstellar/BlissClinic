import C1 from "../public/Cimg.jpg";
import Image from "next/image";

const Carousel = () => {
  return (
    <div>
      <Image src={C1} className="w-full md:h-2/3 h-1/2"></Image>
    </div>
  );
};

export default Carousel;
