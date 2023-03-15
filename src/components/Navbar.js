import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id:1,
      link: "home"

    },
    {
      id: 2,
      link: "LostFound",
    },

    {
      id: 2,
      link: "about",
    },

    {
      id: 5,
      link: "Contact",
    },
    {
      id: 6,
      link: "Login",
    },
    {
      id: 7,
      link: "Register",
    },
    {
        id: 7,
        link: "Logout",
      },
  ];

  return (
    
    <nav className="navbar-container">
      <div className="">
        <div className="relative flex  justify-center items-center h-16"></div>
          <div className="w-full flex  justify-around  items-center">
            <div className=" text-3xl text-white  ">
                <h1>Lost&Found</h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>


                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  LostFound
                </Link>

                 <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/service"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>

                <Link
                  to="/service#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>

                <Link
                  to="/price"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </Link>

              </div>
            </div>
            <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4  z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {
        nav && (
            <div className="naviii flex flex-col justify-start  items-center absolute top-24 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {
                links.map(({ id, link }) => (
                  <div className='flex  text-black text-lg w-full h-full  bg-white'>
          <p key={id} className="ml-8 cursor-pointer capitalize  ">
            <Link onClick={()=>setNav(!nav)} to={link} smooth duration="500">{link}</Link>

            
            </p>
          </div>
           )) }
    
          </div>

        )
      }
            </div>
            </div>
    </nav>
  )
}

export default Navbar