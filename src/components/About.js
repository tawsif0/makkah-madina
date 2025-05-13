/* eslint-disable max-lines */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import imgAbout from '../assets/images/about.png';
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Image animation
        gsap.from(imageRef.current, {
            scrollTrigger: {
                trigger: imageRef.current,
                start: 'top center+=200',
                toggleActions: 'play none none reverse'
            },
            x: -200,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });

        // Content animation
        gsap.from(contentRef.current, {
            scrollTrigger: {
                trigger: contentRef.current,
                start: 'top center+=200',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2
        });
    }, []);

    return (
        <section className="about-section py-5 overflow-hidden">
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Image Column */}
                    <div className="col-lg-6" ref={imageRef}>
                        <div className="image-wrapper position-relative">
                            <img src={imgAbout} alt="Our Team" className="about-image img-fluid rounded-4" loading="lazy" />
                            <div className="gradient-border"></div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="col-lg-6" ref={contentRef}>
                        <div className="about-content">
                            <h2 className="section-title mb-4">আমাদের সম্পর্কে জানুন</h2>

                            <p className="lead-text mb-4">
                                আমাদের সাথে আপনার হজ ও ওমরার স্বপ্ন পূরণ করুন। আমরা একটি স্মরণীয় ভ্রমণের জন্য ব্যতিক্রমী প্যাকেজ এবং ব্যক্তিগত পরিষেবা প্রদান করি। এখনই আপনার ভ্রমণ বুক করুন।
                            </p>

                            <div className="vm-wrapper">
                                <div className="vm-card card-hover">
                                    <h3 className="vm-title">ভিশন</h3>
                                    <p className="vm-text">
                                        বাংলাদেশে হজ ও ওমরাহ ভ্রমণের অভিজ্ঞতাকে নতুনভাবে পরিবর্তন করা, স্মরণীয় ও ব্যতিক্রমী প্যাকেজ এবং ব্যক্তিগত পরিষেবার মাধ্যমে। আমাদের লক্ষ্য হল আপনার যাত্রাকে আরো
                                        আরামদায়ক ও অর্থপূর্ণ করে তোলা।
                                    </p>
                                </div>

                                <div className="vm-card card-hover mt-4">
                                    <h3 className="vm-title">মিশন</h3>
                                    <p className="vm-text">
                                        হজ ও ওমরাহ যাত্রীদের জন্য সেরা পরিষেবা ও প্যাকেজ প্রদান করা, যার মাধ্যমে আমরা তাদের পবিত্র যাত্রাকে আরও স্মরণীয় এবং সুন্দর করে তুলব। আমাদের লক্ষ্য হল যাত্রীদের
                                        প্রত্যাশা পূরণে সহায়ক হওয়া এবং একটি অসাধারণ ভ্রমণ অভিজ্ঞতা প্রদান করা।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
