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
            <section className="footer-social-section container px-5 py-4">
                <MDBRow className="align-items-center justify-content-between g-0">
                    <MDBCol md="6" className="mb-3 mb-md-0">
                        <div className="footer-social-text">
                            <span>আমাদের সাথে সরাসরি যুক্ত থাকুন</span>
                        </div>
                    </MDBCol>

                    <MDBCol md="6">
                        <div className="footer-social-icons d-flex justify-content-md-end gap-2">
                            <a href="https://www.facebook.com/tourandtravelsmokkah" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                                <MDBIcon fab icon="facebook-f" />
                            </a>
                            <a href="https://wa.me/8801847271006" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                                <MDBIcon fab icon="whatsapp" />
                            </a>

                            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                                <MDBIcon fab icon="twitter" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                                <MDBIcon fab icon="instagram" />
                            </a> */}
                        </div>
                    </MDBCol>
                </MDBRow>
            </section>

            {/* Main Content */}
            <section className="footer-content-section container px-5 py-4">
                <MDBRow className="">
                    {/* Logo Column */}
                    <MDBCol lg="6" className="mb-4 footer-col pe-lg-5 align-items-start">
                        <div onClick={handleClick} role="button" className="footer-brand">
                            <img src={logo} alt="Company Logo" className="logo-img mb-4" />
                            <p className="footer-description">আপনার আধ্যাত্মিক যাত্রার বিশ্বস্ত সঙ্গী। আমরা বিশেষজ্ঞ পিলগ্রিমেজ অভিজ্ঞতা তৈরি করি।</p>
                        </div>
                    </MDBCol>

                    {/* Contact Column */}
                    <MDBCol lg="6" className="mb-4 d-flex justify-content-md-end gap-2">
                        <div className="contact-wrapper">
                            <h6 className="footer-heading mb-4">যোগাযোগ</h6>
                            <div className="contact-content">
                                <div className="d-flex align-items-start">
                                    <MDBIcon icon="map-marker-alt" className="me-3 mt-1 contact-icon" />
                                    <div>
                                        <p className="fw-medium">ক-১৪৭, কাজী বাড়ি, ভাটারা,ঢাকা-১২২৯</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <MDBIcon icon="envelope" className="me-3 contact-icon" />
                                    <a href="mailto:makkamadinarpothe@gmail.com" className="contact-link">
                                        makkamadinarpothe@gmail.com
                                    </a>
                                </div>

                                <div className="d-flex align-items-center">
                                    <MDBIcon icon="phone-alt" className="me-3 contact-icon" />
                                    <a href="tel:+8801676938351" className="contact-link">
                                        +880 1676-938351
                                    </a>
                                </div>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </section>

            {/* Copyright */}
            <div className="footer-copyright text-center p-4">
                © 2025 Copyrights Reserved{' '}
                <a href="https://arbeittechnology.com" className="footer-brand-link" target="_blank" rel="noopener noreferrer">
                    Arbeit Technology
                </a>
            </div>
        </MDBFooter>
    );
}
