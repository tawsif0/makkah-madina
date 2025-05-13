/* eslint-disable max-lines */
// Navbars.jsx
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbars = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { name: 'হোম', id: 'home' },
        { name: 'আমাদের সম্পর্কে', id: 'about-us' },
        { name: 'নিয়মাবলী', id: 'products' },
        { name: 'যোগাযোগ', id: 'services' }

        // { name: 'Why Choose Us', id: 'why-choose-us' },
        // { name: 'Clientele', id: 'clientele' }
        // { name: 'Show Case', id: 'showcase' }
    ];

    const handleNavClick = (id) => {
        setActiveSection(id); // Set active immediately

        if (location.pathname === '/') {
            const section = document.getElementById(id);
            if (section) {
                const offset = -80;
                const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { scrollTo: id } });
        }

        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const middleY = window.scrollY + window.innerHeight / 2;
            let closestId = '';
            let minDist = Infinity;

            navItems.forEach(({ id }) => {
                const el = document.getElementById(id);
                if (el) {
                    const center = el.offsetTop + el.offsetHeight / 2;
                    const dist = Math.abs(center - middleY);
                    if (dist < minDist && middleY >= el.offsetTop && middleY <= el.offsetTop + el.offsetHeight) {
                        minDist = dist;
                        closestId = id;
                    }
                }
            });

            setActiveSection(closestId || ''); // Unset if nothing found
        };

        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);

            if (location.state?.scrollTo) {
                const target = location.state.scrollTo;
                setTimeout(() => {
                    const el = document.getElementById(target);
                    if (el) {
                        const offset = -80;
                        const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                }, 100);
            } else {
                handleScroll(); // Detect initial active section on mount
            }
        }

        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, location.state]);

    return (
        <Navbar expand="lg" fixed="top" className={`glass-navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen && !isScrolled ? 'menu-open' : ''}`}>
            <Container>
                <Navbar.Brand onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
                    <img src={logo} alt="TechNova" className="logo-img" height="40" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    <div className={`hamburger futuristic-icon ${isMenuOpen ? 'open' : ''}`}>{isMenuOpen ? <X size={32} /> : <Menu size={32} />}</div>
                </Navbar.Toggle>

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto align-items-lg-center">
                        {navItems.map((item) => (
                            <Nav.Link key={item.id} onClick={() => handleNavClick(item.id)} className={`nav-item ${activeSection === item.id ? 'active' : ''}`} as="span">
                                <span className="nav-link-content">{item.name}</span>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbars;
