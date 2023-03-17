import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-400">
      <div className="flex flex-col bg-cyan-900 p-5 m-5 text-white rounded-b-3xl">
        <h1 className="text-xl font-bold text-center">Contact Us</h1>
        <p className="text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima
          mollitia sed sapiente. Distinctio minima quibusdam harum natus, vitae
          eum delectus rerum porro molestiae? Illo quaerat ipsum recusandae
          veniam animi?
        </p>
      </div>

      <form className="px-4 my-32 max-w-3xl mx-auto space-y-6">
        <div className="w-1/2 flex space-x-5">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              className="border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              type="text"
              id="firstName"
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              className="border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              type="text"
              id="lastName"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Enter Email</label>
          <input
            className="border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
            type="email"
            id="email"
          />
        </div>
        <div>
          <textarea name="message" id="message" cols="30" rows="10" className="w-full focus:outline-none">
            Send Us an E-mail
          </textarea>
        </div>
      </form>
    </div>
  );
};

export default Contact;
