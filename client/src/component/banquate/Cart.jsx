// /* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios'

const Cart = () => {
    // const API = "https://dummyjson.com/carts";
    // const [data, setData] = useState('')

    // const fetchAPIdata = async () => {
    //     try {
    //         const res = await axios.get('https://dummyjson.com/carts');
    //         console.log(res.data)
    //         setData(res.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     fetchAPIdata();
    // }, [])

    return (
        <div className='h-auto py-10 gap-5 flex justify-center items-center flex-wrap border-b-2'>
            <div className=" max-w-sm items-center bg-white border border-gray-200 rounded-lg shadow ">
                <Link to="/" >
                    <img className=" rounded-t-lg " src={"./img/sectiom-img.jpg"} alt="product image" />
                </Link>
                <div className="px-5  pb-5">
                    <div className='flex justify-between'>
                        <div className='text-xl font-bold'> <h1>Name</h1></div>
                        <div className=''><MdStarRate className='inline' /> Rating</div>
                    </div>
                    <div className="flex items-center ">
                        <span className="  text-xs font-semibold  rounded  ms-3"><FaLocationDot /></span>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            Location
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold ">Price/day : 1000$ </span>
                        <Link to="/" className="text-white bg-dark-green  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Visit</Link>
                    </div>
                </div>
            </div>
            <div className=" max-w-sm items-center bg-white border border-gray-200 rounded-lg shadow ">
                <Link to="/" >
                    <img className=" rounded-t-lg " src={"./img/sectiom-img.jpg"} alt="product image" />
                </Link>
                <div className="px-5  pb-5">
                    <div className='flex justify-between'>
                        <div className='text-xl font-bold'> <h1>Name</h1></div>
                        <div className=''><MdStarRate className='inline' /> Rating</div>
                    </div>
                    <div className="flex items-center ">
                        <span className="  text-xs font-semibold  rounded  ms-3"><FaLocationDot /></span>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            Location
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold ">Price/day : 1000$ </span>
                        <Link to="/" className="text-white bg-dark-green  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Visit</Link>
                    </div>
                </div>
            </div>
            <div className=" max-w-sm items-center bg-white border border-gray-200 rounded-lg shadow ">
                <Link to="/" >
                    <img className=" rounded-t-lg " src={"./img/sectiom-img.jpg"} alt="product image" />
                </Link>
                <div className="px-5  pb-5">
                    <div className='flex justify-between'>
                        <div className='text-xl font-bold'> <h1>Name</h1></div>
                        <div className=''><MdStarRate className='inline' /> Rating</div>
                    </div>
                    <div className="flex items-center ">
                        <span className="  text-xs font-semibold  rounded  ms-3"><FaLocationDot /></span>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            Location
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold ">Price/day : 1000$ </span>
                        <Link to="/" className="text-white bg-dark-green  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Visit</Link>
                    </div>
                </div>
            </div>
            <div className=" max-w-sm items-center bg-white border border-gray-200 rounded-lg shadow ">
                <Link to="/" >
                    <img className=" rounded-t-lg " src={"./img/sectiom-img.jpg"} alt="product image" />
                </Link>
                <div className="px-5  pb-5">
                    <div className='flex justify-between'>
                        <div className='text-xl font-bold'> <h1>Name</h1></div>
                        <div className=''><MdStarRate className='inline' /> Rating</div>
                    </div>
                    <div className="flex items-center ">
                        <span className="  text-xs font-semibold  rounded  ms-3"><FaLocationDot /></span>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            Location
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold ">Price/day : 1000$ </span>
                        <Link to="/" className="text-white bg-dark-green  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Visit</Link>
                    </div>
                </div>
            </div>
            <div className=" max-w-sm items-center bg-white border border-gray-200 rounded-lg shadow ">
                <Link to="/" >
                    <img className=" rounded-t-lg " src={"./img/sectiom-img.jpg"} alt="product image" />
                </Link>
                <div className="px-5  pb-5">
                    <div className='flex justify-between'>
                        <div className='text-xl font-bold'> <h1>Name</h1></div>
                        <div className=''><MdStarRate className='inline' /> Rating</div>
                    </div>
                    <div className="flex items-center ">
                        <span className="  text-xs font-semibold  rounded  ms-3"><FaLocationDot /></span>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            Location
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold ">Price/day : 1000$ </span>
                        <Link to="/" className="text-white bg-dark-green  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Visit</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart