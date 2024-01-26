/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <>
            <div className='bg-gray-300 h-screen  '>
                <div className='container mx-auto pt-[10vh] '>
                    <div className='bg-green-600 text-white  h-[10vh] flex justify-center items-center'>
                        <h1 className='text-2xl'>Login to WebBook</h1>
                    </div>
                    <div className='bg-white p-10  flex flex-col justify-center items-center'>
                        <form className='flex flex-col justify-center items-center gap-5'>

                            <input type='number' placeholder='Enter Phone No' className='border-2 w-96 p-2 rounded-xl ' />

                            <input type='password' placeholder='Enter Password' className='border-2 w-96 p-2 rounded-xl ' />
                            <div className='flex justify-between container '>
                                <div className=''>
                                    <input type='checkbox' className='cursor-pointer relative ' />
                                    <span className='ml-2'>Show password</span>
                                </div>
                                <span className='text-green-600 pointer'>Forget Password?</span>
                            </div>
                            <button type='submit' className='cursor-pointer border-2 border-green-400 hover:rounded-md px-5 py-2' >Login</button>
                            <span className='text-green-600'>Don't have an account?</span>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Signin