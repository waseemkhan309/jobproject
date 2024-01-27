/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../component/Header'
import Section from '../component/Section'
import Register from '../component/Register'
import Services from '../component/Services'
import Layout from '../component/Layout'
import Testinomials from '../component/Testinomials'
import Footer from '../component/Footer'
// import { Routes, Route } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <Header />
            <Section />
            <Register />
            <Services />
            <Layout />
            <Testinomials />
            <Footer />
        </>
    )
}

export default Home