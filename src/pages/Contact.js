import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen w-full">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-black w-full max-w-4xl p-8 rounded-xl text-white shadow-lg overflow-hidden">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
            <p className="pt-2 text-cyan-100">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              enim illo aspernatur
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <i className="bi bi-telephone-fill text-teal-300 text-xl"></i>
              <span>+(254) 789 1234</span>
            </div>

            <div className="inline-flex space-x-2 items-center">
              <i className="bi bi-envelope-fill text-teal-300 text-xl"></i>
              <span>lostandfoun@gmail.com</span>
            </div>

            <div className="inline-flex space-x-2 items-center">
              <i className="bi bi-geo-fill text-teal-300 text-xl"></i>
              <span>ngong-road, Nairobi, Kenya</span>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
          </div>
        </div>
        <div className="relative">
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-20 -top-28 blur-lg"></div>
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-20 -bottom-20 blur-lg"></div>
          <div className=" relative z-10 bg-white rounded-xl shadow-lg p-8 md:w-80">
            <form className="flex flex-col space-y-4 text-gray-700">
              <div>
                <label htmlFor="name" className="text-sm">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="ring-1 ring-gray-300 w-full rounded-md py-2 px-4 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                />
              </div>
              <div>
                <label htmlFor="name" className="text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="ring-1 ring-gray-300 w-full rounded-md py-2 px-4 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                />
              </div>
              <div>
                <label htmlFor="name" className="text-sm">
                  Message
                </label>
                <textarea
                  type="email"
                  rows="4"
                  placeholder="Write to us"
                  className="ring-1 ring-gray-300 w-full rounded-md py-2 px-4 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                />
              </div>
              <button className="inline-block self-end bg-black text-white px-6 py-2 rounded-lg font-bold uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
