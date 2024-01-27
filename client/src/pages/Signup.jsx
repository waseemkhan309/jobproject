/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <div className='bg-color-lightgreen h-screen  '>
                <div className='container mx-auto pt-[10vh] px-auto '>
                    <div className='bg-color-primary text-white  h-[10vh] flex justify-center items-center'>
                        <h1 className='text-2xl'>Welcome to WebBook</h1>
                    </div>
                    <div className='bg-white p-10  flex flex-col justify-center items-center'>
                        <form className='flex flex-col justify-center items-center gap-5'>
                            <input type='text' placeholder='Enter Username' className='border-2 w-96 p-2 rounded-xl ' />
                            <input type='number' placeholder='Enter Phone No' className='border-2 w-96 p-2 rounded-xl ' />
                            <input type='Email' placeholder='Enter email No' className='border-2 w-96 p-2 rounded-xl ' />
                            <input type='password' placeholder='Enter Password' className='border-2 w-96 p-2 rounded-xl ' />
                            <input type='password' placeholder='Enter Confirm Password' className='border-2 w-96 p-2 rounded-xl ' />
                            <button type='submit' className='cursor-pointer border-2 border-color-primary hover:rounded-md px-5 py-2' >SignUp</button>
                            <span className='text-color-primary cursor-pointer'>You Already have an Account?</span>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Signup