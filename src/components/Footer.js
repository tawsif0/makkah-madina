/* eslint-disable max-lines */
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
            <section className="text-center d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer-social-section container">
                <div className="me-5 d-none d-lg-block footer-social-text">
                    <span>Foolow us on social networks</span>
                </div>

                <div className="footer-social-icons">
                    <Link to="/" className="me-4  footer-icon-link">
                        <MDBIcon fab icon="facebook-f" />
                    </Link>
                    <Link to="/" className="me-4  footer-icon-link">
                        <MDBIcon fab icon="twitter" />
                    </Link>
                    <Link to="/" className="me-4  footer-icon-link">
                        <MDBIcon fab icon="instagram" />
                    </Link>
                    <Link to="/" className="me-4 footer-icon-link">
                        <MDBIcon fab icon="linkedin" />
                    </Link>
                </div>
            </section>

            <section className="footer-content-section container">
                <MDBRow className="mt-3 d-flex justify-content-between w-100">
                    <MDBCol md="3" lg="4" xl="3" className="mb-4 footer-col">
                        <div onClick={handleClick} role="button" className="mb-4 text-uppercase fw-bold footer-heading">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <img src={logo} alt="Sky Logo" className="logo-img" />
                            </h6>
                        </div>
                    </MDBCol>

                    <MDBCol md="4" lg="3" xl="3" className="mb-md-0 mb-4 footer-col flex-end ms-3">
                        <h6 className="text-uppercase fw-bold mb-4 footer-heading">Contact</h6>
                        <p>
                            <MDBIcon color="secondary" icon="home" className="me-2" />
                            613 East Kazipara (North Side of Metro Station), Kafrul, Dhaka-1216.
                        </p>
                        <p>
                            <MDBIcon color="secondary" icon="envelope" className="me-3" />
                            sky@gmail.com
                        </p>
                        <p>
                            <MDBIcon color="secondary" icon="phone" className="me-3" />
                            +8801339612116
                        </p>
                    </MDBCol>
                </MDBRow>
            </section>

            <div className="text-center p-4 footer-copyright">
                © 2025 Copyright:
                <Link className="text-reset fw-bold footer-brand-link" to="https://arbeittechnology.com/">
                    Arbeit Technology
                </Link>
            </div>
        </MDBFooter>
    );
}
