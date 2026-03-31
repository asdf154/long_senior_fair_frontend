import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', phone: '', email: '', company: '', subject: '', message: '' });
    };

    return (
        <div className="contact">
            <HeroSection title="Contact us" subtitle="Seniors Fair SG" titleClassName="hero__title--small" subtitleClassName="hero__subtitle--large" />

            <section className="contact__content section">
                <div className="container">
                    <div className="contact__grid">
                        <div className="contact__info">
                            <h2 className="contact__heading"><span style={{ letterSpacing: '2px' }}>We&apos;d</span> Love To Hear From You</h2>
                            <p>
                                We're here to answer any question you might have. Please fill up the contact
                                form and we will get back to you within 2 working days.
                            </p>

                            <div className="contact__details">
                                <div className="contact__detail">
                                    <div className="contact__detail-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-sky-blue)" strokeWidth="1.5">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Address</h4>
                                        <p>60 Paya Lebar Road<br />#06-28 Paya Lebar Square<br />Singapore 409051</p>
                                    </div>
                                </div>

                                <div className="contact__detail">
                                    <div className="contact__detail-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-hot-pink)" strokeWidth="1.5">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+65 6646 3445</p>
                                    </div>
                                </div>

                                <div className="contact__detail">
                                    <div className="contact__detail-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-sky-blue)" strokeWidth="1.5">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>enquiry@seniorsfair.sg</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact__form-wrapper">
                            <p className="contact__form-note">
                                Fields marked with an asterisk (<span>*</span>) are mandatory
                            </p>
                            <form className="contact__form" onSubmit={handleSubmit}>
                                <div className="contact__field">
                                    <label htmlFor="name">Name <span>*</span></label>
                                    <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="email">Email <span>*</span></label>
                                    <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="subject">Subject <span>*</span></label>
                                    <input type="text" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="message">Message <span>*</span></label>
                                    <textarea id="message" name="message" placeholder="Your message..." rows="5" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
