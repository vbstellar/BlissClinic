import Form from "./Form.js";

export default function Contact() {
  return (
    <div className="p-20">
      <div>
        <h1 className="text-3xl text-center text-gray-600 font-bold">
          Contact Us
        </h1>
        <div className="flex justify-center items-center">
          <hr className="bg-gray-600 my-2 h-1 rounded-lg w-24 " />
        </div>
      </div>
      <div className="grid md:grid-cols-2 my-4">
        <div className="rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8520268382854!2d77.18154777605265!3d28.63419667566381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02a4d8f337bb%3A0x7ccdc846100a3819!2sPamposh%20Rd%2C%20Block%20R%2C%20Rajender%20Nagar%20Part%201%2C%20Rajinder%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110060!5e0!3m2!1sen!2sin!4v1687697063158!5m2!1sen!2sin"
            className="w-full h-80"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
