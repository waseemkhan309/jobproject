/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";



const Header = () => {
    const [isMenuopen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuopen)
    }
    const navItems = [
        { link: "Home", path: "banquate" },
        { link: "Servces", path: "banquate" },
        { link: "About", path: "banquate" },
        { link: "Contact", path: "banquate" },
    ]

    return (
        <>
            <nav className=' bg-color-lightgreen  font-medium flex justify-around items-center h-[10vh]'>
                {/* logo */}
                <div className="">
                    <Link className='text-color-primary  text-2xl font-bold ' to='/'>
                        <span > WedBook </span>
                    </Link>
                </div>

                {/* showing navbar */}
                <div className=" hidden md:flex">
                    <ul className='md:flex  space-x-12 '>
                        {
                            navItems.map(({ link, path }) => <li key={link}> <Link to={path} className='block font-semibold'>{link}</Link></li>)
                        }
                    </ul>
                </div>

                {/* signin  and signout */}
                <div className="space-x-6">
                    <Link to='/signin'><button className='py-2 px-4  rounded-md bg-color-primary  font-semibold  '> Sign In</button></Link>
                    <Link to='/signup'><button className='py-2 px-4 bg-transparent rounded-md border-2 hover:border-green-400 font-semibold '> Sign up </button></Link>

                </div>

                {/* monile design */}
                <div className='flex md:hidden ' >
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuopen ? (<FaXmark className='w-6 h-6' />) : (<TiThMenu className='w-6 h-6' />)
                        }
                    </button>
                </div>

            </nav>
            <div className={` space-y-4 px-4 pt-4 pb-5 text-center  bg-color-primary md:hidden ${isMenuopen ? "block" : "hidden"}`}>

                {
                    navItems.map(({ link, path }) => <Link to={path} key={link} className='block font-semibold  hover:text-color-lightgreen '>{link}</Link>)
                }

            </div>

        </>
    )
}

export default Header