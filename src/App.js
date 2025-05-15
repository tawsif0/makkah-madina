/* eslint-disable max-lines */
import React, { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes, Route, and BrowserRouter
import './index.css';
import Navbars from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/About';
import Product from './components/Products';
import FAQ from './components/Faq';
import Footer from './components/Footer';
import Error from './pages/Error';
import GetInTouch from './components/GetInTouch';
import Rules from './components/Rules';

const App = () => {
    const [selectedPackage, setSelectedPackage] = useState('');
    const servicesRef = useRef(null);

    const handlePackageClick = (pkg) => {
        setSelectedPackage(pkg);
        if (servicesRef.current) {
            servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Routes>
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
                            <section id="rules">
                                <Rules />
                            </section>
                            <section id="products">
                                <Product onSelectPackage={handlePackageClick} />
                            </section>
                            <section id="services" ref={servicesRef}>
                                <GetInTouch selectedPackage={selectedPackage} />
                            </section>
                            <section id="faqs">
                                <FAQ />
                            </section>
                            <Footer />
                        </>
                    }
                />

                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default App;
