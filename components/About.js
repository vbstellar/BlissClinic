import Image from "next/image";
import Doc from "../public/docImg.jpg";

export default function About() {
  return (
    <div className="md:p-20 p-4">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="">
          <h1 className="text-4xl text-gray-600 font-bold">Doctor</h1>
          <h1 className="text-3xl text-gray-600 font-semibold">
            Dr. Meenakshi Bagga
          </h1>
          <hr className="h-2 my-2 bg-gray-500 rounded-lg w-52" />
          <p className="text-gray-500 font-medium">
            Dr. Meenakshi Bagga is a highly skilled and experienced doctor with
            qualifications in BHMS (Bachelor of Homeopathic Medicine and
            Surgery) and PGD ND (Post Graduate Diploma in Naturopathy and
            Dietetics). With her strong educational background and specialized
            training, she possesses a deep understanding of holistic healthcare
            approaches.
          </p>

          <ul className="text-gray-500 py-4">
            <li>☑️ Pregnancy Test</li>
            <li>☑️ Blood Sugar Test</li>
            <li>☑️ Gynaecological Disorder</li>
            <li>☑️ Infertility Evaluation / Treatment</li>
            <li>☑️ Obesity and other Lifestyle Disease Modifications</li>
            <li>☑️ Chronic Diseases</li>
            <li>☑️ Kidney Stone Treatment</li>
            <li>☑️ PCOD/PCOS Treatment</li>
            <li>☑️ Menstrual Disorders in Adolescent Girls</li>
            <li>☑️ Pre and Post Delivery Care</li>
            <li>☑️ Diseases in Pregnancy</li>
            <li>☑️ Nutrition for Pregnant Women</li>
            <li>☑️ Obesity Treatment</li>
            <li>☑️ Bronchial Asthma Treatment</li>
            <li>☑️ Pelvic Tumours</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Image src={Doc} className="h-2/3 w-2/3 rounded-full"></Image>
        </div>
      </div>
    </div>
  );
}
