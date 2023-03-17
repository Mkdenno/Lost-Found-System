import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center  w-full flex-col">
      <div className="ml-5 mr-5  text-lg lg:flex lg:justify-center lg:items-center sm:flex sm:justify-center">
        <h1 className="text-2xl lg:text-3xl font-bold mt-10 mb-5">About Our Lost and found System</h1>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-black w-full max-w-4xl p-8 mb-10 rounded-xl text-white shadow-lg overflow-hidden">
          <div className="w-full">
            <img
            className="lg:w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0zyStsV98LVXasWI49bx_CsFjoew3DjAnA&usqp=CAU"
              alt="LostAndFoundSystem"
            />
          </div>
          {/* <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-20 -top-28 blur-lg"></div> */}
          {/* <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-20 -bottom-20 blur-lg"></div> */}
          <div className="lg:w-2/5 lg:mr-20">
            <h1 className="text-cyan-500">Lost And Found System</h1>
            <p>
              Lost and found software is a centralized platform for managing
              items that have been lost or found. This tool helps users create a
              network of lost and found items digitally to help businesses
              manage these occurrences more efficiently:
            </p>
            <ul className="list-disc">
              <li className="text-cyan-500">Lost ID</li>
              <li className="text-cyan-500">Lost Title Deed</li>
              <li className="text-cyan-500">Lost Birth Certificate</li>
              <li className="text-cyan-500">Lost Passports</li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default About;
