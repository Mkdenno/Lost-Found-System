import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen py-40" style={{ backgroundColor: "cloud" }}>
      <div className="container mx-auto">
        <div className="w-10/12 lg:w-8/12 bg-white flex flex-col lg:flex-row rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-no-repeat p-12 bg-cover bg-center"
            style={{
              backgroundImage: `url(${"https://imgs.search.brave.com/ruQ-D0q6nr6ZQrOB4dBlkRXZZd9akgBvLJPaFXzxVu8/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/QXlaaVYzb3lENG9N/TWlwZ0tSOURnSGFF/SyZwaWQ9QXBp"})`,
            }}
          >
            <h1 className="text-white font-bold text-3xl mb-4 ">welcome</h1>
            <div>
              <p className="text-white font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, illum! Neque accusantium aut quos perferendis, sequi
                et, repudiandae hic quidem obcaecati officiis iusto in
                architecto!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12 ">
            <h1 className="text-3xl mb-4">Register</h1>
            <p className="mb-4">
              Create Your Account its free and takes only a minute
            </p>
            <form>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="firstName"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  placeholder="lastName"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <button type="submit" className="w-full bg-black text-white text-center py-3">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
