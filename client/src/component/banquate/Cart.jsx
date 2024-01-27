/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import axios from 'axios'

const Cart = () => {
    // const API = "https://dummyjson.com/carts";

    const fetchAPIdata = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/carts');
            console.log(res.data)
            // console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAPIdata();
    }, [])

    return (
        <div className='h-screen bg-yellow-100'>Cart</div>
    )
}

export default Cart