import HeroSection from '../components/HeroSection';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <HeroSection title="About Seniors Fair SG" subtitle="Our Story & Mission" />

            <section className="about__content section">
                <div className="container">
                    <div className="about__grid">
                        <div className="about__main">
                            <h2 className="about__heading">Welcome to Seniors Fair SG</h2>
                            <p>
                                Seniors Fair SG is Singapore's premier exhibition dedicated to the senior community.
                                Our mission is to bring together the best products, services, and resources that
                                enhance the quality of life for seniors and their families.
                            </p>
                            <p>
                                From health & wellness to financial planning, travel, lifestyle products, and community
                                services — Seniors Fair SG is your one-stop destination to discover trusted providers
                                who understand and cater to the unique needs of the senior community.
                            </p>

                            <div className="about__highlights">
                                <div className="about__highlight">
                                    <div className="about__highlight-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-sky-blue)" strokeWidth="1.5">
                                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Community Focused</h4>
                                        <p>Bringing seniors, families, and service providers together in one space.</p>
                                    </div>
                                </div>

                                <div className="about__highlight">
                                    <div className="about__highlight-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-hot-pink)" strokeWidth="1.5">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Trusted Exhibitors</h4>
                                        <p>Carefully curated exhibitors offering quality products and services.</p>
                                    </div>
                                </div>

                                <div className="about__highlight">
                                    <div className="about__highlight-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-sky-blue)" strokeWidth="1.5">
                                            <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Exclusive Deals</h4>
                                        <p>Special promotions and offers available only at the fair.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about__sidebar">
                            <div className="about__event-card">
                                <h3>Event Details</h3>
                                <div className="about__event-item">
                                    <span className="about__event-label">Date</span>
                                    <span className="coming-soon-badge">Coming Soon</span>
                                </div>
                                <div className="about__event-item">
                                    <span className="about__event-label">Time</span>
                                    <span className="coming-soon-badge">Coming Soon</span>
                                </div>
                                <div className="about__event-item">
                                    <span className="about__event-label">Venue</span>
                                    <span className="coming-soon-badge">Coming Soon</span>
                                </div>
                                <div className="about__event-item">
                                    <span className="about__event-label">Admission</span>
                                    <span className="about__event-value">Free</span>
                                </div>
                            </div>

                            <div className="about__organizer-card">
                                <h3>Organised By</h3>
                                <div className="about__organizer-logo">
                                    <img src="/assets/branding/thyll-logo-portrait.png" alt="Thyll Events" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
