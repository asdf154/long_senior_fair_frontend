import HeroSection from '../components/HeroSection';
import './Exhibitors.css';

const Exhibitors = () => {
    return (
        <div className="exhibitors">
            <HeroSection title="Exhibitors" subtitle="Seniors Fair SG" />

            <section className="exhibitors__intro section">
                <div className="container">
                    <h2 className="section-title">Exhibitor Booths & Packages</h2>
                    <p className="section-subtitle">
                        Explore our booth options and secure your spot at Singapore's premier seniors fair.
                    </p>
                </div>
            </section>

            <section className="exhibitors__booths">
                <div className="container">
                    <div className="exhibitors__booth-grid">
                        <div className="exhibitors__booth-card">
                            <div className="exhibitors__booth-image">
                                <div className="exhibitors__booth-placeholder">
                                    <span>3x3 Booth</span>
                                    <span className="exhibitors__booth-sub">Image Placeholder</span>
                                </div>
                            </div>
                            <div className="exhibitors__booth-info">
                                <h3>Standard Booth (3x3)</h3>
                                <p>Perfect for small businesses and individual exhibitors looking to showcase their products and services.</p>
                                <ul className="exhibitors__booth-features">
                                    <li>3m × 3m floor space</li>
                                    <li>Basic booth structure included</li>
                                    <li>Standard lighting & signage</li>
                                    <li>2 exhibitor passes</li>
                                </ul>
                                <span className="coming-soon-badge">Pricing Coming Soon</span>
                            </div>
                        </div>

                        <div className="exhibitors__booth-card">
                            <div className="exhibitors__booth-image">
                                <div className="exhibitors__booth-placeholder">
                                    <span>6x9 Booth</span>
                                    <span className="exhibitors__booth-sub">Image Placeholder</span>
                                </div>
                            </div>
                            <div className="exhibitors__booth-info">
                                <h3>Premium Booth (6x9)</h3>
                                <p>Ideal for larger organizations wanting a prominent presence with premium visibility and foot traffic.</p>
                                <ul className="exhibitors__booth-features">
                                    <li>6m × 9m floor space</li>
                                    <li>Custom booth design options</li>
                                    <li>Premium lighting & branding</li>
                                    <li>6 exhibitor passes</li>
                                    <li>Priority floor placement</li>
                                </ul>
                                <span className="coming-soon-badge">Pricing Coming Soon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="exhibitors__sales-kit section" id="sales-kit">
                <div className="container">
                    <div className="exhibitors__sales-kit-card">
                        <div className="exhibitors__sales-kit-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-sky-blue)" strokeWidth="1.5">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                        </div>
                        <h2>Download Sales Kit</h2>
                        <p>Get all the information you need about booth packages, sponsorship tiers, and exhibitor benefits.</p>
                        <button className="btn btn-primary" disabled>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download PDF — Coming Soon
                        </button>
                    </div>
                </div>
            </section>

            <section className="exhibitors__contact section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Interested in Exhibiting?</h2>
                    <p className="section-subtitle">
                        Contact us to learn more about exhibitor packages and early bird pricing.
                    </p>
                    <a href="/contact" className="btn btn-secondary">Contact Us</a>
                </div>
            </section>
        </div>
    );
};

export default Exhibitors;
