import React from 'react';
import { FaBroadcastTower, FaBolt, FaIndustry } from 'react-icons/fa';
import './Clientele.css';

const Clientele = () => {
    return (
        <section className="clientele-section">
            <div className="container text-center">
                <h2 className="clientele-heading">Clientele</h2>
                <p className="clientele-subtext">Our trusted partners include leading organizations such as</p>

                <div className="industries-wrapper">
                    <div className="industry">
                        <FaBroadcastTower className="industry-icon telecom" />
                        <span className="industry-name">Telecom Industry</span>
                    </div>
                    <div className="industry">
                        <FaBolt className="industry-icon energy" />
                        <span className="industry-name">Energy & Utilities</span>
                    </div>
                    <div className="industry">
                        <FaIndustry className="industry-icon manufacturing" />
                        <span className="industry-name">Manufacturing</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clientele;
