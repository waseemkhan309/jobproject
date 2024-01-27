/* eslint-disable no-unused-vars */
import React from 'react'
import { CgMenuGridR } from "react-icons/cg";
import { PiDiamondsFour } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";




const DataTake = () => {
    return (
        <>
            <div className='bg-dark-green text-white'>
                <div className='ml-10'>
                    <form className='space-y-10  '>
                        <label htmlFor="city" className='text-xl font-semibold ml-10 mr-2' >City:</label>
                        <input type="text" id='city' />
                        <label htmlFor="rating" className='text-xl font-semibold ml-10  mr-2'>Rating:</label>
                        <input type="text" id='rating' />
                        <label htmlFor="budget" className='text-xl font-semibold ml-10  mr-2'>Budget:</label>
                        <input type="text" id='budget' />
                        <label htmlFor="space" className='text-xl font-semibold ml-10  mr-2'>Sapce:</label>
                        <input type="text" id='space' />
                    </form>
                </div>
                <div className='flex justify-between '>
                    <div className='m-10'>
                        <h1 className='text-3xl font-semibold'>Banquet Halls</h1>
                        <span>Choose,book and enjoy</span>
                    </div>
                    <div className='flex m-10'>
                        <span className='text-3xl '><CgMenuGridR /></span>
                        <span className='text-3xl ml-2'><PiDiamondsFour /></span>
                        <span className='bg-color-lightgreen  flex ml-2  ' >
                            <input type='text' className='h-7 outline-none text-black' placeholder='Search...' />
                            <FaSearch className='text-black cursor-pointer m-2 ' />
                        </span>
                    </div>
                </div>
            </div >
        </>
    )
}

export default DataTake