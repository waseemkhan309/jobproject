/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

const Layout = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row bg-color-lightgreen pl-5 justify-center items-center p-2 h-[40vh]'>

                <div className='flex-1 text-4xl  font-semibold'>
                    <h1 >Start your Journey to the perfect wedding </h1>
                </div>
                <div className='flex-1'>
                    <p className='mb-4 text-2xl text-[#616161]'>portfolio,price and reviews collected in one place</p>
                    <button className='bg-color-primary px-6 py-3 border-rad-b'>Get Started</button>
                </div>
            </div>
            <div className='flex '>
                <div className='flex-1  h-auto img-control  '>
                    <img src={"./img/sectiom-img.jpg"} className='w-[30vw] mx-auto' alt="img" />
                </div>
                <div className='flex-1 flex flex-col justify-center px-2'>
                    <h1 className='text-4xl mb-9 font-semibold'>Wedbook - Your Personal Wedding Planner</h1>
                    <p className='text-color-primary text-xl'>Plan your wedding with Us </p>
                    <h1 className='text-4xl'>Leave us to focus on you...</h1>
                </div>
            </div>
            <div className='h-auto py-10'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[#424545] text-4xl font-semibold underline'>About <span className='text-[#010101]'>-</span>WedBook</h1>
                    <p className='text-[#657073] py-5 text-center text-2xl px-10'>WedBook is a Pakistani Wedding Planning Website and app where you can find the best wedding vendors, with prices and reviews at the click of a button. Whether you are looking to register wedding service in Pakistan or looking for the top venues, cooks ,decorator or caterer. WedMeGood can help you solve your wedding planning woes through its unique features. With a checklist, detailed vendor list, inspiration gallery and blog - you won't need to spend hours planning a wedding anymore.</p>
                </div>
            </div>
            <div className='bg-img2 text-white flex flex-col justify-center items-center p-10'>
                <h1 className='text-3xl font-semibold'>Celebrate with Us</h1>
                <p className='text-2xl mt-6'>As the premier event planning company in the area,Each event and client is unique and we believe our services should be as well</p>
            </div>
        </>
    )
}

export default Layout