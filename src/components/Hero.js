/* eslint-disable max-lines */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import { gsap } from 'gsap';

const heroData = [
    {
        type: '',
        title: 'মক্কা মদিনার পথে ট্যুরস এন্ড ট্রাভেলস',
        location: 'সৃষ্টিশীলতা শক্তির উৎস, ইসলামী ঐতিহ্যের দিকে পথ চলা',
        image: require('../assets/images/hero2.webp')
    },
    {
        type: 'প্রিমিয়াম হজ ও ওমরাহ সেবা',
        title: 'পবিত্র হজ ও ওমরার জন্য অসাধারণ পরিষেবা',
        location: 'পবিত্র মক্কা ও মদিনার পথে, এক অমুল্য সফরের সাথে',
        image: require('../assets/images/hero1.webp')
    },
    {
        type: '',
        title: 'আপনার হজ ও ওমরার স্বপ্ন পূরণ করুন',
        location: 'ইসলামের পবিত্র পথে, এক অসাধারণ ভ্রমণের অভিজ্ঞতা',
        image: require('../assets/images/hero3.png')
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [displayedIndex, setDisplayedIndex] = useState(0);
    const currentRef = useRef(0);

    const currentImageRef = useRef(null);
    const nextImageRef = useRef(null);
    const progressItemsRef = useRef([]);
    const progressFillRefs = useRef([]);
    const intervalRef = useRef(null);
    const zoomTweenRef = useRef(null);
    const progressTweenRef = useRef(null);

    const goToSlide = (nextIndex) => {
        if (nextIndex === currentRef.current) return;

        clearInterval(intervalRef.current);
        if (zoomTweenRef.current) zoomTweenRef.current.kill();
        if (progressTweenRef.current) progressTweenRef.current.kill();

        progressFillRefs.current.forEach((ref) => {
            if (ref) gsap.set(ref, { scaleX: 0 });
        });

        setDisplayedIndex(nextIndex);

        const currentImage = currentImageRef.current;
        const nextImage = nextImageRef.current;

        gsap.set(nextImage, {
            backgroundImage: `url(${heroData[nextIndex].image})`,
            x: '100%', // Changed from 'y' to 'x' for horizontal transition
            opacity: 1,
            zIndex: 2
        });

        gsap.set(currentImage, { zIndex: 1 });

        const tl = gsap.timeline({
            onComplete: () => {
                currentImage.style.backgroundImage = `url(${heroData[nextIndex].image})`;
                gsap.set(currentImage, { x: 0, opacity: 1, zIndex: 2 }); // Changed from 'y' to 'x'
                gsap.set(nextImage, { opacity: 0 });

                currentRef.current = nextIndex;
                setCurrent(nextIndex);

                startZoomAnimation();
                startProgressAnimation(nextIndex);
                startAutoSlide();
            }
        });

        // Updated transition from vertical to horizontal (right to left)
        tl.to(currentImage, { x: '-100%', duration: 0.8, ease: 'power2.inOut' }, 0);
        tl.to(nextImage, { x: '0%', duration: 0.8, ease: 'power2.inOut' }, 0);
    };

    const nextSlide = () => {
        const nextIndex = (currentRef.current + 1) % heroData.length;
        goToSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (currentRef.current - 1 + heroData.length) % heroData.length;
        goToSlide(prevIndex);
    };

    const startZoomAnimation = () => {
        gsap.set(currentImageRef.current, { scale: 1 });
        zoomTweenRef.current = gsap.to(currentImageRef.current, {
            scale: 1.1,
            duration: 4.8,
            ease: 'none'
        });
    };

    const startProgressAnimation = (index) => {
        const fillRef = progressFillRefs.current[index];
        if (!fillRef) return;

        gsap.set(fillRef, { scaleX: 0 });
        progressTweenRef.current = gsap.to(fillRef, {
            scaleX: 1,
            duration: 5,
            ease: 'none'
        });
    };

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 5000);
    };

    useEffect(() => {
        gsap.set(currentImageRef.current, {
            backgroundImage: `url(${heroData[current].image})`,
            scale: 1,
            x: 0, // Changed from 'y' to 'x'
            opacity: 1,
            zIndex: 2
        });

        gsap.set(nextImageRef.current, {
            opacity: 0,
            x: 0, // Changed from 'y' to 'x'
            zIndex: 1
        });

        setDisplayedIndex(current);
        currentRef.current = current;
        startZoomAnimation();
        startProgressAnimation(current);
        startAutoSlide();

        return () => {
            clearInterval(intervalRef.current);
            if (zoomTweenRef.current) zoomTweenRef.current.kill();
            if (progressTweenRef.current) progressTweenRef.current.kill();
        };
    }, []);

    useEffect(() => {
        progressItemsRef.current.forEach((item, index) => {
            if (item) {
                item.classList.toggle('active', index === displayedIndex);
            }
        });
    }, [displayedIndex]);

    // Lazy Load Background Images with IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const imageUrl = el.getAttribute('data-bg'); // Get background URL from data attribute
                    el.style.backgroundImage = `url(${imageUrl})`; // Set the background image
                    el.classList.add('loaded'); // Optional: Add a class when loaded
                    observer.unobserve(el); // Stop observing
                }
            });
        });

        // Observe the images
        if (currentImageRef.current) observer.observe(currentImageRef.current);
        if (nextImageRef.current) observer.observe(nextImageRef.current);

        // Cleanup on unmount
        return () => {
            if (currentImageRef.current) observer.unobserve(currentImageRef.current);
            if (nextImageRef.current) observer.unobserve(nextImageRef.current);
        };
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-overlay" />
            {/* Hero Image 1 */}
            <div
                className="hero-image current"
                ref={currentImageRef}
                data-bg={heroData[current].image} // Store the background image URL in data-bg
            />

            {/* Hero Image 2 */}
            <div
                className="hero-image next"
                ref={nextImageRef}
                data-bg={heroData[(current + 1) % heroData.length].image} // Store the background image URL in data-bg
            />

            <div className="hero-content container">
                <div className="hero-details">
                    <p className="hero-type">{heroData[displayedIndex].type}</p>
                    <h1 className="hero-title">{heroData[displayedIndex].title}</h1>
                    <p className="hero-location">{heroData[displayedIndex].location}</p>
                </div>
                <div className="hero-navigation-wrapper">
                    <div
                        className="hero-navigation"
                        style={{
                            width: `${heroData.length * 25 + (heroData.length - 1) * 8}px`
                        }}>
                        <div className="hero-arrows">
                            <button className="hero-arrow left" onClick={prevSlide}>
                                ←
                            </button>
                            <button className="hero-arrow right" onClick={nextSlide}>
                                →
                            </button>
                        </div>

                        <div className="hero-progress-bars">
                            {heroData.map((_, index) => (
                                <div
                                    key={index}
                                    className={`hero-progress-item ${index === displayedIndex ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                    ref={(el) => (progressItemsRef.current[index] = el)}>
                                    <div className="hero-progress-track" />
                                    <div className="hero-progress-fill" ref={(el) => (progressFillRefs.current[index] = el)} style={{ transform: 'scaleX(0)' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
