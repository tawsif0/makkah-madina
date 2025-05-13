/* eslint-disable max-lines */
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes, Route, and BrowserRouter
import './index.css';
import Navbars from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/About';
import Product from './components/Products';
// import Shows from './components/Show';
import Footer from './components/Footer';
import Error from './pages/Error';
import GetInTouch from './components/GetInTouch';

const App = () => {
    return (
        <>
            <Routes>
                {/* Route for the Home page */}
                <Route
                    path="/"
                    element={
                        <>
                            <section id="home">
                                <Navbars />
                                <Hero />
                            </section>
                            <section id="about-us">
                                <AboutSection />
                            </section>
                            <section id="products">
                                <Product />
                            </section>
                            <section id="services">
                                <GetInTouch />
                            </section>
                            <Footer />
                        </>
                    }
                />

                {/* Fallback route for invalid URLs (404 Error Page) */}
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default App;
