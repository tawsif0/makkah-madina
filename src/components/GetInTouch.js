/* eslint-disable max-lines */
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css';
import './GetInTouch.css';

const packageOptions = ['প্যাকেজ ১', 'প্যাকেজ ২', 'প্যাকেজ ৩'];

const GetInTouch = ({ selectedPackage }) => {
    const [phone, setPhone] = useState('');
    const [packageValue, setPackageValue] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (selectedPackage) {
            setPackageValue(selectedPackage);
        }
    }, [selectedPackage]);

    // This function handles changes on controlled inputs and clears errors for that field
    const handleChange = (field, value) => {
        if (errors[field]) {
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                delete newErrors[field];
                return newErrors;
            });
        }

        if (field === 'phone') {
            setPhone(value);
        } else if (field === 'package') {
            setPackageValue(value);
        }
        // For name and email, inputs are uncontrolled so we clear errors in onChange inline handlers below
    };

    const validateForm = (formData) => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'নাম প্রয়োজন';
        } else if (formData.name.trim().length < 6) {
            errors.name = 'নাম কমপক্ষে ৬ অক্ষরের হতে হবে';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email.trim()) {
            if (!emailRegex.test(formData.email)) {
                errors.email = 'অবৈধ ইমেইল ঠিকানা';
            }
        }
        if (!phone) {
            errors.phone = 'ফোন নম্বর প্রয়োজন';
        } else if (!isValidPhoneNumber(phone)) {
            errors.phone = 'অবৈধ ফোন নম্বর';
        }
        if (!formData.package) {
            errors.package = 'প্যাকেজ নির্বাচন করুন';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        const formData = {
            name: e.target.name.value.trim(),
            email: e.target.email.value.trim(),
            phone: phone,
            address: e.target.address.value.trim(),
            package: packageValue
        };

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        // Prepare WhatsApp message text
        let message = `নতুন যোগাযোগ:\n`;
        message += `নাম: ${formData.name}\n`;
        if (formData.email) message += `ইমেইল: ${formData.email}\n`;
        message += `ফোন: ${formData.phone}\n`;
        message += `প্যাকেজ: ${formData.package}\n`;
        if (formData.address) message += `মন্তব্য: ${formData.address}\n`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // Replace with your WhatsApp number with country code (no + sign)
        const whatsappNumber = '8801676938351'; // আপনার নম্বর এখানে বসান

        // WhatsApp Click to Chat URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp Web or app in new tab/window
        window.open(whatsappURL, '_blank');

        // Reset form & state
        e.target.reset();
        setPhone('');
        setPackageValue('');
        setIsSubmitting(false);

        // Show success toast
        toast.success('WhatsApp ওপেন হয়েছে, দয়া করে মেসেজ সেন্ড করুন!', {
            position: 'bottom-center',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: 'toast-success'
        });
    };

    return (
        <section className="get-in-touch-section">
            <div className="container">
                <div className="text-wrapper">
                    <form className="get-in-touch-form" onSubmit={handleSubmit}>
                        <h2 className="section-titles">
                            <span className="highlight">যোগাযোগ করুন</span>
                        </h2>

                        <div className="form-group floating-label">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder=" "
                                className={errors.name ? 'is-invalid' : ''}
                                autoComplete="off"
                                onChange={() => {
                                    if (errors.name) {
                                        setErrors((prev) => {
                                            const newErrors = { ...prev };
                                            delete newErrors.name;
                                            return newErrors;
                                        });
                                    }
                                }}
                            />
                            <label htmlFor="name">নাম</label>
                            {errors.name && <div className="error-message">{errors.name}</div>}
                        </div>

                        <div className="form-group floating-label">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder=" "
                                autoComplete="off"
                                className={errors.email ? 'is-invalid' : ''}
                                onChange={() => {
                                    if (errors.email) {
                                        setErrors((prev) => {
                                            const newErrors = { ...prev };
                                            delete newErrors.email;
                                            return newErrors;
                                        });
                                    }
                                }}
                            />
                            <label htmlFor="email">ইমেইল</label>
                            {errors.email && <div className="error-message">{errors.email}</div>}
                        </div>

                        <div className="form-group floating-label">
                            <div className={`phone-input-container ${errors.phone ? 'is-invalid' : ''}`}>
                                <PhoneInput international defaultCountry="BD" value={phone} onChange={(value) => handleChange('phone', value)} placeholder="ফোন নম্বর লিখুন" className="phone-input" />
                            </div>
                            {errors.phone && <div className="error-message">{errors.phone}</div>}
                        </div>

                        <div className="form-group floating-label">
                            <select name="package" className={`form-control ${errors.package ? 'is-invalid' : ''}`} value={packageValue} onChange={(e) => handleChange('package', e.target.value)}>
                                <option value="" disabled>
                                    প্যাকেজ নির্বাচন করুন
                                </option>
                                {packageOptions.map((pkg, i) => (
                                    <option key={i} value={pkg}>
                                        {pkg}
                                    </option>
                                ))}
                            </select>
                            {errors.package && <div className="error-message">{errors.package}</div>}
                        </div>

                        <div className="form-group floating-label">
                            <input type="text" id="address" name="address" placeholder=" " autoComplete="off" />
                            <label htmlFor="address">মন্তব্য</label>
                        </div>

                        <Button type="submit" className="cta-button" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <ClipLoader color="#000" size={20} />
                                    <span style={{ marginLeft: '10px' }}>জমা দিন</span>
                                </>
                            ) : (
                                'জমা দিন'
                            )}
                        </Button>
                    </form>
                </div>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastClassName="custom-toast"
                bodyClassName="toast-body"
                progressClassName="toast-progress"
            />
        </section>
    );
};

export default GetInTouch;
