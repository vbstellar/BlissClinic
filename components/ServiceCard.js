import Image from "next/image";

export default function ServiceCard(props) {
  return (
    <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gray-200">
      <Image
        src={props.logo}
        width={150}
        height={150}
        className="mx-auto"
        alt=""
      />
      <h3 className=" text-lg font-medium pt-8 pb-2">{props.name}</h3>
      <p className="py-2 ">{props.desc}</p>
      <p className="text-royal-blue-600 py-1 ">{props.spec1}</p>
      <p className="text-royal-blue-600 py-1 ">{props.spec2}</p>
      <p className="text-royal-blue-600 py-1 ">{props.spec3}</p>
    </div>
  );
}
