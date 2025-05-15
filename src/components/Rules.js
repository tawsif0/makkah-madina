/* eslint-disable max-lines */
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Rules.css';
import hajjVideo from '../assets/videos/hajj-guide.mp4';
gsap.registerPlugin(ScrollTrigger);

const Rules = () => {
    const videoRef = useRef(null);
    const contentRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleVideoControl = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
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
            ease: 'power3.out'
        });
    }, []);

    // Hajj rules in Bangla
    const hajjRules = [
        'ইহরামের সময় বিশেষ দুআ ও তালবিয়া পাঠ করতে হবে',
        'মিকাত থেকে ইহরাম বাঁধা অবশ্যকর্তব্য',
        'কাবা শরিফ তাওয়াফ সাত চক্করে সম্পন্ন করতে হবে',
        'সাফা-মারওয়া 사이 সাঈ করা ফরজ',
        'আরাফাতের দিন সূর্যাস্ত পর্যন্ত অবস্থান করা wajib',
        'মুজদালিফায় রাত যাপন ও জামারাত নির্বাচন',
        'কোরবানির দিন পশু জবেহ করা ফরজ',
        'হালকা বা কসর করা (চুল কাটা) প্রয়োজনীয়'
    ];

    return (
        <section className="rules-section  overflow-hidden">
            <div className="container py-5">
                <h2 className="rules-title mb-4">হজের নিয়মাবলী</h2>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="rules-content">
                            <ul className="rules-list">
                                {hajjRules.map((rule, index) => (
                                    <li key={index} className="rules-item">
                                        <span className="rule-marker"></span>
                                        {rule}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Video Column */}
                    <div className="col-lg-6">
                        <div className="rules-video-container">
                            <div className="video-wrapper">
                                <video ref={videoRef} className="rules-video" autoPlay muted loop>
                                    <source src={hajjVideo} type="video/mp4" />
                                </video>

                                <button className={`video-control ${isPlaying ? 'playing' : ''}`} onClick={handleVideoControl}>
                                    <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
                                </button>

                                <div className="video-gradient"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rules;
