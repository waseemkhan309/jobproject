/* eslint-disable no-unused-vars */
import React from 'react'

const Layout = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row bg-color-lightgreen pl-5 justify-center items-center p-2 h-[40vh]'>

                <div className='flex-1 text-4xl font-semibold'>
                    <h1>Start your Journey to the perfect wedding </h1>
                </div>
                <div className='flex-1'>
                    <p className='mb-4 text-xl text-[#616161]'>portfolio,price and reviews collected in one place</p>
                    <button className='bg-color-primary px-6 py-3 border-rad-b'>Get Started</button>
                </div>
            </div>
            <div className='flex '>
                <div className='flex-1  h-auto img-control  '>
                    <img src={"./img/img2.jpg"} className='w-[30vw] mx-auto' alt="img" />
                </div>
                <div className='flex-1 flex flex-col justify-center px-2'>
                    <h1 className='text-4xl font-semibold'>Wedbook - Your Personal Wedding Planner</h1>
                    <p className='text-color-primary text-xl'>Plan your wedding with Us </p>
                    <h1 className='text-4xl'>Leave us to focus on you...</h1>
                </div>
            </div>
            <div className='h-screen'>
                <div>

                </div>
            </div>
        </>
    )
}

export default Layout