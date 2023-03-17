import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='footer-container w-full  flex justify-center items-center flex-col' >
        <div className='flex justify-around flex-wrap w-full'>
        <div className="mt-6">
                <h1 className='text-3xl text-cyan-500'>Lost And Found Document Recovery System</h1>
                <p className='text-sm mt-5'>Please let us Know if you misplaced your Documents</p>
                <div className=' flex justify-start items-center mt-5'>
                <i className='border-solid border-2 border-gray-700 rounded-full mr-2 p-2'><BsFacebook/></i>
                <i className='border-solid border-2 border-gray-700 rounded-full mr-2 p-2'><AiOutlineTwitter/></i>
                <i className='border-solid border-2 border-gray-700 rounded-full mr-2 p-2'><BsInstagram/></i>
                <i className='border-solid border-2 border-gray-700 rounded-full mr-2 p-2'><AiFillLinkedin/></i>
                </div>

        </div> 
        <div className="mt-6">
            <h1 className='text-lg'>INFORMATION</h1>
            <p className='text-sm mt-5 text-cyan-500'>Lost And Found Document Recovery System</p>

            <div className='mt-5'>
            <div className='flex justify-start items-center text-sm'>
            <label className='headerpart1'>Tel:</label><p>+245 715886876</p>
            </div>
            <div className='flex justify-start items-center text-sm'>
            <label className='headerpart1'>Tel:</label><p>+254 741 135470</p>
            </div>

            <div className='flex justify-start items-center mt-2 text-sm'>
            <label className='headerpart1'>Email:</label><p>denniskiprop25@gmail.com</p>
            </div>

            <div className='flex justify-start items-center mt-2 text-sm'>
            <label className='headerpart1'>Email:</label><p>njerukithinji@gmail.com</p>
            </div>

            <div className='flex justify-start items-center mt-2 text-sm'>
            <label className='headerpart1'>Working Hours:</label><p>8.00am-5.00pm</p>
            </div>
            </div>

         </div>
         <div className="mt-6">
            <h1>QUICK LINKS</h1>
            <ul className='mt-5'>
            <Link to='/'><li className=''>Home</li></Link>
            <Link to='/about'><li className=''>Lost&Found</li></Link>
            <Link to='/services'><li className=''>About</li></Link>
            <Link to='/contact'><li className=''>Contact</li></Link>
            <Link to='/admin'><li className=''>Admin</li></Link>
            </ul>
        </div>
        </div>

        <div className='footer-last mt-10 h-36'>
        <p>© Copyright 2023 Lost And Found. All Rights Reserved</p>
        <p>Designed by <Link to='/' className='headerpart1'>Dennis And Ezra</Link></p>
        </div>




       
    </div>
  )
}

export default Footer