import ServiceCard from "./ServiceCard";
import I1 from "../public/infertile.png";
import I2 from "../public/adultDentist.png";
import I3 from "../public/kidDentist.png";
import I4 from "../public/hair.jpg";

export default function Services() {
  return (
    <div className="bg-royal-blue-900 md:p-20 p-4">
      <div className="">
        <h1 className="text-3xl text-center text-gray-100 font-bold ">
          Services We Offer
        </h1>
        <div className="flex justify-center items-center">
          <hr className="bg-gray-300 my-2 h-1 rounded-lg w-40 " />
        </div>
      </div>

      <div className=" lg:flex gap-10 ">
        <ServiceCard
          logo={I1}
          name="Infertility Cases"
          desc="Inability to conceive or reproduce naturally due to various factors affecting fertility."
          spec1="Sterility"
          spec2="Barrenness"
          spec3="Impotence"
        ></ServiceCard>
        <ServiceCard
          logo={I2}
          name="Dental Diagnosis"
          desc="Identifying oral health issues through examination and analysis of teeth and gums."
          spec1="Examination"
          spec2="Analysis"
          spec3="Oral Health"
        ></ServiceCard>
        <ServiceCard
          logo={I3}
          name="Kids Special Dentistry"
          desc="Specialized dental care for children, focusing on their oral health and treatment needs."
          spec1="Pediatric"
          spec2="Oral Care"
          spec3="Children"
        ></ServiceCard>
        <ServiceCard
          logo={I4}
          name="Hair and Skin PRP"
          desc="Utilizing Platelet-Rich Plasma for rejuvenation and restoration of hair and skin."
          spec1="Restoration"
          spec2="Rejuvenation"
          spec3="PRP"
        ></ServiceCard>
      </div>
    </div>
  );
}
