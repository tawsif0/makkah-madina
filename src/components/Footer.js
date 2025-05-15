/* eslint-disable max-lines */
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { MDBFooter, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';
import logo from '../assets/images/logo.png';

export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname !== '/') {
            navigate('/', { state: { fromFooter: true } });
        } else {
            scrollToHero();
        }
    };

    const scrollToHero = () => {
        const hero = document.getElementById('hero-section');
        if (hero) {
            hero.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (location.state?.fromFooter && location.pathname === '/') {
            scrollToHero();
        }
    }, [location]);

    return (
        <MDBFooter className="text-lg-start text-muted footer-main">
            {/* Social Section */}
            <section className="footer-social-section container container-fluid px-5 py-4">
                <MDBRow className="align-items-center justify-content-between">
                    <MDBCol md="6" className="mb-3 mb-md-0">
                        <div className="footer-social-text">
                            <span>আমাদের সাথে সরাসরি যুক্ত থাকুন</span>
                        </div>
                    </MDBCol>

                    <MDBCol md="6">
                        <div className="footer-social-icons d-flex justify-content-md-end">
                            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="footer-icon-link mx-2">
                                <MDBIcon fab icon="facebook-f" />
                            </a>
                            <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="footer-icon-link mx-2">
                                <MDBIcon fab icon="whatsapp" />
                            </a>
                            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="footer-icon-link mx-2">
                                <MDBIcon fab icon="twitter" />
                            </a>
                            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-icon-link mx-2">
                                <MDBIcon fab icon="instagram" />
                            </a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </section>

            {/* Main Content */}
            <section className="footer-content-section container px-5 py-5">
                <MDBRow className="g-5">
                    {/* Left Column */}
                    <MDBCol lg="6" className="mb-4 footer-col">
                        <div onClick={handleClick} role="button" className="footer-brand">
                            <img src={logo} alt="Sky Logo" className="logo-img mb-4" />
                            <p className="footer-description">আপনার আধ্যাত্মিক যাত্রার বিশ্বস্ত সঙ্গী। আমরা বিশেষজ্ঞ পিলগ্রিমেজ অভিজ্ঞতা তৈরি করি।</p>
                        </div>
                    </MDBCol>

                    {/* Right Column */}
                    <MDBCol lg="6" className="mb-4 footer-col align-right">
                        <MDBRow>
                            <MDBCol md="6">
                                <h6 className="footer-heading mb-4">যোগাযোগের তথ্য</h6>
                                <div className="contact-item d-flex align-items-start mb-3">
                                    <MDBIcon icon="map-marker-alt" className="me-3 mt-1 contact-icon" />
                                    <div>
                                        <p className="mb-0">কে-১৪৭, কাফরুল, ঢাকা-১২১৬</p>
                                        <p className="mb-0">কাজী বাড়ি, কাঁচপুর</p>
                                    </div>
                                </div>
                                <div className="contact-links">
                                    <a href="mailto:makkamadinarpothe@gmail.com" className="contact-link d-block mb-3">
                                        <MDBIcon icon="envelope" className="me-3" />
                                        makkamadinarpothe@gmail.com
                                    </a>
                                    <a href="tel:+8801677638512" className="contact-link d-block mb-3">
                                        <MDBIcon icon="phone-alt" className="me-3" />
                                        ০১৬৭৭৬৩৮৫১২
                                    </a>
                                    <a href="tel:+8801814872106" className="contact-link d-block">
                                        <MDBIcon icon="phone-alt" className="me-3" />
                                        ০১৮১৪৮৭২১০৬
                                    </a>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </section>

            {/* Copyright */}
            <div className="footer-copyright text-center p-4">
                © ২০২৫ সর্বস্বত্ব সংরক্ষিত{' '}
                <a href="https://arbeittechnology.com/" className="footer-brand-link" target="_blank" rel="noopener noreferrer">
                    Arbeit Technology
                </a>
            </div>
        </MDBFooter>
    );
}
