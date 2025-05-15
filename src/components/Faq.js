/* eslint-disable max-lines */
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'কিভাবে হজ/উমরাহ প্যাকেজ বুক করব?',
            answer: 'আমাদের প্যাকেজ বিভাগে যান, আপনার পছন্দের প্যাকেজ নির্বাচন করুন, প্রয়োজনীয় তথ্য পূরণ করুন এবং পেমেন্ট করুন। আমাদের টিম ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবে।'
        },
        {
            question: 'রেজিস্ট্রেশনের জন্য কী কী ডকুমেন্ট লাগবে?',
            answer: 'বৈধ পাসপোর্ট (অন্তত ৬ মাস বৈধতা সহ), ৪ টি পাসপোর্ট সাইজ ছবি, ভ্যাকসিনেশন সার্টিফিকেট এবং পূর্ণাঙ্গ আবেদন ফরম লাগবে।'
        },
        {
            question: 'আমি কি আমার ট্রাভেল প্যাকেজ কাস্টমাইজ করতে পারি?',
            answer: 'অবশ্যই! আমরা সম্পূর্ণ কাস্টমাইজেবল প্যাকেজ অফার করি। আপনার প্রয়োজন ও পছন্দ নিয়ে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।'
        },
        {
            question: 'আপনারা কী কী নিরাপত্তা ব্যবস্থা দেন?',
            answer: 'আমরা ২৪/৭ মেডিকেল সাপোর্ট, GPS ট্র্যাকড গ্রুপ, মহিলা-নির্দিষ্ট গ্রুপ এবং জরুরি যোগাযোগ নম্বর প্রদান করি।'
        },
        {
            question: 'আপনার বাতিলকরণ নীতি কী?',
            answer: 'যাত্রার ৯০+ দিন আগে বাতিল করলে ৮০% ফেরত, ৬০-৮৯ দিনের মধ্যে ৫০% ফেরত, এবং ৬০ দিনের কম হলে ২৫% ফেরত দেওয়া হয়। বিস্তারিত নীতি ডকুমেন্টে রয়েছে।'
        }
    ];

    return (
        <section className="faq-section">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} className="text-center">
                        <h2 className="section-title">
                            প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
                            <span className="section-subtitle">আপনার যাত্রা, আমাদের অভিজ্ঞতা</span>
                        </h2>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="faq-container">
                            {faqs.map((faq, index) => (
                                <div key={index} className={`faq-card ${activeIndex === index ? 'active' : ''}`} onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                                    <div className="faq-header">
                                        <h3 className="faq-question">{faq.question}</h3>
                                        <span className="toggle-icon">
                                            <div className={`bar horizontal ${activeIndex === index ? 'active' : ''}`}></div>
                                            <div className={`bar vertical ${activeIndex === index ? 'active' : ''}`}></div>
                                        </span>
                                    </div>
                                    <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FAQ;
