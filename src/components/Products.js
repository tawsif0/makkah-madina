/* eslint-disable max-lines */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Products.css'; // Your custom CSS

const hajjPackages = [
    {
        title: 'প্যাকেজ ১',
        price: '৳ ১৫০,০০০',
        facilities: ['মক্কা ও মদিনা ৫ রাত', 'প্রাইভেট বাস', '৩ বেলা খাবার', 'হজের সকল আনুষ্ঠানিকতা সহায়তা', 'ইহরাম প্রদান']
    },
    {
        title: 'প্যাকেজ ২',
        price: '৳ ২০০,০০০',
        facilities: ['মক্কা ও মদিনা ৭ রাত', 'এক্সক্লুসিভ বাস', 'সুবিধাযুক্ত হোটেল', '৩ বেলা খাবার', 'বিশেষ গাইড', 'ইহরাম প্রদান']
    },
    {
        title: 'প্যাকেজ ৩',
        price: '৳ ২৫০,০০০',
        facilities: ['মক্কা ও মদিনা ১০ রাত', 'লাক্সারি বাস ও হোটেল', 'প্রাইভেট গাইড', 'ফাস্ট ট্র্যাক আনুষ্ঠানিকতা', 'পুরো সময় সহায়তা', 'ইহরাম প্রদান']
    }
];

const HajjPackagesComponent = () => {
    return (
        <div className="hajj-packages-section">
            <Container className="py-5 text-center">
                <h1 className="section-title text-center mb-5">হজ প্যাকেজ সমূহ</h1>
                <Row className="g-4 justify-content-center">
                    {hajjPackages.map((pkg, idx) => (
                        <Col key={idx} lg={4} md={6} sm={12}>
                            <div className="package-card">
                                <div className="card-content">
                                    <h3 className="package-title">{pkg.title}</h3>
                                    <p className="package-price">{pkg.price}</p>
                                    <ul className="facility-list">
                                        {pkg.facilities.map((item, i) => (
                                            <li key={i} className="facility-item">
                                                <span className="icon">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="button-container">
                                        <button className="package-button">
                                            বিস্তারিত জানুন
                                            <span className="button-shine"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default HajjPackagesComponent;
