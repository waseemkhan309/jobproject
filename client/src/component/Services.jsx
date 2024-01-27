/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div>
            <div className=' flex justify-between p-10 '>
                <h1 className='text-4xl'>Main Services</h1>
                <button className='bg-color-primary px-10 py-3 border-rad text-white font-semibold'>Become a Provider</button>
            </div>
            <div className='flex space-5 gap-5 p-5  w-full flex-wrap '>

                <div className='flex-1  text-center space-y-7  '>
                    <Link to='/banquate'>
                        <div className='bg-venue-card flex items-center  '>
                            <div className='w-96 flex-1 flex-col justify-center'>
                                <h1 className='font-bold text-4xl text-color-primary'>Venues</h1>
                                <p className='text-venue-text'>Book the best venue banquate hall</p>
                            </div>
                            <div className='flex-1'>
                                <img src={"./img/sectiom-img.jpg"} className='img-side' alt="venu" />
                            </div>
                        </div>
                    </Link>

                    <div className='bg-[#4E5787] flex items-center '>
                        <div className='w-96 flex-1 flex-col justify-center'>
                            <h1 className='font-bold text-4xl text-color-primary'>Decorators</h1>
                            <p className='text-venue-text'>Find te best Decorators and enjoy</p>
                        </div>
                        <div className='flex-1 '>
                            <img src={"./img/sectiom-img.jpg"} className='img-side' alt="venu" />
                        </div>
                    </div>

                </div>
                <div className='flex-1  text-center space-y-7 '>

                    <div className='bg-[#657073] flex items-center '>
                        <div className='flex-1'>
                            <img src={"./img/sectiom-img.jpg"} className='img-side2' alt="venu" />
                        </div>
                        <div className='w-96 flex-1 flex-col justify-center'>
                            <h1 className='font-bold text-4xl text-color-primary'>Caterers</h1>
                            <p className='text-venue-text'>Search the best caterer around us</p>
                        </div>
                    </div>
                    <div className='bg-[#6B603A] flex items-center '>
                        <div className='flex-1'>
                            <img src={"./img/sectiom-img.jpg"} className='img-side2' alt="venu" />
                        </div>
                        <div className='w-96 flex-1 flex-col justify-center'>
                            <h1 className='font-bold text-4xl text-color-primary'>Cooks</h1>
                            <p className='text-venue-text'>Explore the best chefs and Cooks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services