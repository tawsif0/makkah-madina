import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Products.css'; // Custom CSS for styling

const HajjRules = [
    {
        title: 'নিয়ম ১',
        description: 'হজ পালনের জন্য ইহরাম পরিধান করতে হবে এবং নির্ধারিত জায়গা থেকে হজ যাত্রা শুরু করতে হবে।'
    },
    {
        title: 'নিয়ম ২',
        description: 'হজের জন্য পবিত্র স্থানগুলোতে একত্রিত হওয়া এবং হজের সমস্ত আনুষ্ঠানিকতা যথাযথভাবে পালন করা আবশ্যক।'
    },
    {
        title: 'নিয়ম ৩',
        description: 'মক্কা এবং মদিনা ভ্রমণের সময় পবিত্রতা বজায় রাখতে হবে এবং শারীরিক ও মানসিকভাবে প্রস্তুত থাকতে হবে।'
    },
    {
        title: 'নিয়ম ৪',
        description: 'হজের সময় তাওয়াফ, সাঈ, এবং অন্যান্য গুরুত্বপূর্ণ কাজগুলো যথাযথভাবে সম্পন্ন করতে হবে।'
    },
    {
        title: 'নিয়ম ৫',
        description: 'হজের পর হালাল জীবিকা অর্জন এবং ধর্মীয় নিয়ম মেনে চলা অত্যন্ত গুরুত্বপূর্ণ।'
    }
];

const HajjRulesComponent = () => {
    return (
        <div className="hajj-rules-section">
            <Container className="py-5">
                <h1 className="section-title">হজের নিয়ম</h1>
                <Row className="g-4 justify-content-center">
                    {HajjRules.map((rule, idx) => (
                        <Col key={idx} lg={4} md={6} sm={12} className="hajj-rule-card-col">
                            <div className="vm-card">
                                <h3 className="rule-title">{rule.title}</h3>
                                <p className="rule-description">{rule.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default HajjRulesComponent;
