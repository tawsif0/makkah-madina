/* eslint-disable max-lines */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input'; // Import validation function
import emailjs from 'emailjs-com'; // Import EmailJS
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import { ClipLoader } from 'react-spinners'; // Import spinner component
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import 'react-phone-number-input/style.css'; // Import default styles
import './GetInTouch.css';

const GetInTouch = () => {
    const [phone, setPhone] = useState(''); // State to store phone number
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status
    const [errors, setErrors] = useState({}); // State to store validation errors

    // Function to validate form fields
    const validateForm = (formData) => {
        const errors = {};

        // Name validation
        if (!formData.name.trim()) {
            errors.name = 'নাম প্রয়োজন';
        } else if (formData.name.trim().length < 6) {
            errors.name = 'নাম কমপক্ষে ৬ অক্ষরের হতে হবে';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            errors.email = 'ইমেইল প্রয়োজন';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'অবৈধ ইমেইল ঠিকানা';
        }

        // Phone number validation
        if (!phone) {
            errors.phone = 'ফোন নম্বর প্রয়োজন';
        } else if (!isValidPhoneNumber(phone)) {
            errors.phone = 'অবৈধ ফোন নম্বর';
        }

        // Address validation
        // if (!formData.address.trim()) {
        //     errors.address = 'মন্তব্য প্রয়োজন';
        // } else if (formData.address.trim().length < 5) {
        //     errors.address = 'মন্তব্য কমপক্ষে ৫ অক্ষরের হতে হবে';
        // }

        return errors;
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (isSubmitting) return; // Prevent multiple submissions

        // Get form data
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: phone, // Use the state for phone number
            address: e.target.address.value
        };

        // Validate form data
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Set validation errors
            return; // Stop submission if there are errors
        }

        setIsSubmitting(true); // Set submitting state to true
        setErrors({}); // Clear validation errors

        try {
            // Send email using EmailJS
            const response = await emailjs.send(
                'service_pjholsz', // Replace with your EmailJS service ID
                'template_trzeg2c', // Replace with your EmailJS template ID
                formData,
                'p_3e0vA4040YV_BKg' // Replace with your EmailJS user ID
            );

            // Handle success
            console.log('Email sent successfully!', response.status, response.text);
            toast.success('আপনার অনুরোধ সফলভাবে জমা দেওয়া হয়েছে!', {
                position: 'bottom-center',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: 'toast-success' // Custom class for success toast
            });
        } catch (error) {
            // Handle error
            console.error('ইমেইল পাঠাতে ব্যর্থ:', error);
            toast.error('আপনার অনুরোধ জমা দিতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।', {
                position: 'bottom-center',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: 'toast-error' // Custom class for error toast
            });
        } finally {
            setIsSubmitting(false); // Reset submitting state
            e.target.reset(); // Reset the form
            setPhone(''); // Reset phone number state
        }
    };

    return (
        <section className="get-in-touch-section">
            {/* Video Background */}

            <div className="container">
                <div className="text-wrapper">
                    {/* Form */}
                    <form className="get-in-touch-form" onSubmit={handleSubmit}>
                        <h2 className="section-titles">
                            <span className="highlight">যোগাযোগ করুন</span>
                        </h2>

                        {/* Name Field */}
                        <div className="form-group floating-label">
                            <input type="text" id="name" name="name" placeholder=" " className={errors.name ? 'is-invalid' : ''} autoComplete="off" />
                            <label htmlFor="name">নাম</label>
                            {errors.name && <div className="error-message">{errors.name}</div>}
                        </div>

                        {/* Email Field */}
                        <div className="form-group floating-label">
                            <input type="email" id="email" name="email" placeholder=" " className={errors.email ? 'is-invalid' : ''} autoComplete="off" />
                            <label htmlFor="email">ইমেইল</label>
                            {errors.email && <div className="error-message">{errors.email}</div>}
                        </div>

                        {/* Phone Number Field with Country Code */}
                        <div className="form-groups floating-label">
                            <div className={`phone-input-container ${errors.phone ? 'is-invalid' : ''}`}>
                                <PhoneInput international defaultCountry="BD" value={phone} onChange={setPhone} placeholder="ফোন নম্বর লিখুন" className="phone-input" />
                            </div>
                            <label htmlFor="phone">ফোন নম্বর</label>
                            {errors.phone && <div className="error-message">{errors.phone}</div>}
                        </div>

                        {/* Address Field */}
                        <div className="form-group floating-label">
                            <input type="text" id="address" name="address" placeholder=" " autoComplete="off" />
                            <label htmlFor="address">মন্তব্য</label>
                            {/* {errors.address && <div className="error-message">{errors.address}</div>} */}
                        </div>

                        {/* Submit Button with Loader */}
                        <Button type="submit" className="cta-button" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <ClipLoader color="#000" size={20} /> {/* Loader while submitting */}
                                    <span style={{ marginLeft: '10px' }}>জমা হবে</span> {/* Text next to the loader */}
                                </>
                            ) : (
                                '🚀 জমা হবে'
                            )}
                        </Button>
                    </form>
                </div>
            </div>

            {/* Toast Container */}
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
                toastClassName="custom-toast" // Custom class for all toasts
                bodyClassName="toast-body" // Custom class for toast body
                progressClassName="toast-progress" // Custom class for toast progress bar
            />
        </section>
    );
};

export default GetInTouch;
