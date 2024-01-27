/* eslint-disable no-unused-vars */
import React from 'react'
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";


const Testinomials = () => {
    return (
        <>
            {/* testimonials */}
            <div className='h-auto mt-10 text-center '>
                <h1 className='text-color-primary text-4xl font-semibold'> TESTIMONIAL </h1>
                <p className='text-2xl mt-8'>Whats people say about us?</p>
            </div>
            <div className='px-40 flex space-x-5 m-20'>
                <div className=' border-2 border-black p-12 text-center rounded-md'>
                    <p className='text-center'>Thank you soo much for all hard work,your flexibility and dilligence in pulling together a very successfull event. It was a pleasure to work with you.</p>
                    <h2 className='font-semibold'>Mohammad Yaseen</h2>
                </div>
                <div className=' border-2 border-black p-12 text-center rounded-md'>
                    <p className='text-center'>Thank you soo much for all hard work,your flexibility and dilligence in pulling together a very successfull event. It was a pleasure to work with you.</p>
                    <h2 className='font-semibold'>Tehmeed Ullah</h2>
                </div>
            </div>

            <div className='flex space-x-40 p-10'>
                <div className='text-2xl'>
                    <h1 className='text-4xl mb-4'>Contact us</h1>
                    <ul>
                        <li className='flex '><span className='mr-3'><IoMdCall /></span> 0300 1234567</li>
                        <li className='flex '><span className='mr-3'><FaWhatsapp /></span> Whatsapp</li>
                        <li className='flex '><span className='mr-3'>< MdEmail /></span> Email@gmail.com </li>
                        <li className='flex '><span className='mr-3'>< CiLocationOn /></span> Shalimar town from Sbas,punjab</li>
                    </ul>
                </div >
                <div className='text-2xl'>
                    <h1 className='text-4xl mb-4'>Follow  us on: </h1>
                    <ul >
                        <li className='flex'><span className='mr-3'><FaFacebookF /></span> Facebook</li>
                        <li className='flex'><span className='mr-3'><FaTwitter /></span> Twitter</li>
                        <li className='flex'><span className='mr-3'>< FaInstagram /></span> Instagram </li>
                        <li className='flex'><span className='mr-3'>< FaYoutube /></span> Youtube</li>
                    </ul>
                </div >
                <div className='text-2xl'>
                    <h1 className='text-4xl mb-4'>Download Our App </h1>
                    <ul >
                        <li className='text-3xl underline'>From PlayStor</li>
                        <li className='text-3xl underline'>From AppStore</li>

                    </ul>
                </div >
            </div >
        </>
    )
}

export default Testinomials