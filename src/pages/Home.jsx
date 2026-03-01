import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Carousel */}
            <section className="home__carousel-section">
                <div className="home__carousel-wrapper container">
                    <div className="home__carousel-main">
                        <Carousel />
                    </div>
                    <div className="home__carousel-side">
                        <div className="home__promo-card">
                            <span className="coming-soon-badge">Coming Soon</span>
                            <h3>Featured Sponsor</h3>
                            <p>Sponsor details will appear here</p>
                            <span className="placeholder-size-label">Logo: 400 × 200 px (2:1 ratio)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tagline */}
            <div className="home__tagline">
                <p className="home__tagline-sub">Singapore's Premier Seniors Fair</p>
                <h2>Event Information</h2>
            </div>

            {/* Event Info Strip */}
            <section className="home__info-strip">
                <div className="container">
                    <div className="home__info-grid">
                        <div className="home__info-card">
                            <div className="home__info-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-sky-blue)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><rect x="7" y="13" width="3" height="3" rx="0.5" /></svg>
                            </div>
                            <h4>Coming Soon</h4>
                            <p>Dates TBD</p>
                        </div>
                        <div className="home__info-card">
                            <div className="home__info-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-hot-pink)" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </div>
                            <h4>Coming Soon</h4>
                            <p>Time TBD</p>
                        </div>
                        <div className="home__info-card">
                            <div className="home__info-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-sky-blue)" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <h4>Coming Soon</h4>
                            <p>Venue TBD</p>
                        </div>
                        <div className="home__info-card">
                            <div className="home__info-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-hot-pink)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
                            </div>
                            <h4>Free Admission</h4>
                            <p>All are welcome</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Blurb */}
            <section className="home__about section">
                <div className="container">
                    <h2 className="section-title">Discover Seniors Fair SG</h2>
                    <p className="home__about-text">
                        Join us at Singapore's premier seniors fair! Discover a wide range of exhibitors offering
                        health & wellness products, financial planning, lifestyle services, travel packages, and
                        much more — all tailored for the vibrant senior community. Take advantage of exclusive
                        deals and connect with trusted providers in one convenient location.
                    </p>
                </div>
            </section>

            {/* Action Cards */}
            <section className="home__actions">
                <div className="container">
                    <div className="home__actions-grid">
                        <Link to="/exhibitors" className="home__action-card">
                            <div className="home__action-number">01</div>
                            <h3>Exhibitors</h3>
                            <p>View exhibitor list</p>
                        </Link>
                        <Link to="/exhibitors#sales-kit" className="home__action-card">
                            <div className="home__action-number">02</div>
                            <h3>Download Sales Kit</h3>
                            <p>Coming Soon...</p>
                        </Link>
                        <Link to="/floor-plan" className="home__action-card">
                            <div className="home__action-number">03</div>
                            <h3>Floor Plan</h3>
                            <p>View event layout</p>
                        </Link>
                        <Link to="/about" className="home__action-card">
                            <div className="home__action-number">04</div>
                            <h3>About Us</h3>
                            <p>Learn more about the event</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sponsors */}
            <section className="home__sponsors section">
                <div className="container">
                    <h2 className="section-title">Sponsors | Seniors Fair SG</h2>
                    <p className="section-subtitle">Proudly supported by our esteemed partners and sponsors.</p>

                    <div className="home__sponsor-tier">
                        <h3 className="home__sponsor-tier-title">
                            <span className="home__sponsor-badge home__sponsor-badge--platinum">★</span>
                            Platinum Sponsors
                        </h3>
                        <div className="home__sponsor-grid home__sponsor-grid--large">
                            <div className="home__sponsor-placeholder">
                                <span className="coming-soon-badge">Coming Soon</span>
                                <span className="placeholder-size-label">Logo: 400 × 200 px</span>
                            </div>
                            <div className="home__sponsor-placeholder">
                                <span className="coming-soon-badge">Coming Soon</span>
                                <span className="placeholder-size-label">Logo: 400 × 200 px</span>
                            </div>
                        </div>
                    </div>

                    <div className="home__sponsor-tier">
                        <h3 className="home__sponsor-tier-title">
                            <span className="home__sponsor-badge home__sponsor-badge--gold">★</span>
                            Gold Sponsors
                        </h3>
                        <div className="home__sponsor-grid">
                            <div className="home__sponsor-placeholder">
                                <span className="coming-soon-badge">Coming Soon</span>
                                <span className="placeholder-size-label">Logo: 300 × 150 px</span>
                            </div>
                            <div className="home__sponsor-placeholder">
                                <span className="coming-soon-badge">Coming Soon</span>
                                <span className="placeholder-size-label">Logo: 300 × 150 px</span>
                            </div>
                            <div className="home__sponsor-placeholder">
                                <span className="coming-soon-badge">Coming Soon</span>
                                <span className="placeholder-size-label">Logo: 300 × 150 px</span>
                            </div>
                        </div>
                    </div>

                    <div className="home__sponsor-tier">
                        <h3 className="home__sponsor-tier-title">
                            <span className="home__sponsor-badge home__sponsor-badge--silver">★</span>
                            Silver Sponsors
                        </h3>
                        <div className="home__sponsor-grid home__sponsor-grid--small">
                            <div className="home__sponsor-placeholder">
                                <span className="coming-soon-badge">Coming Soon</span>
                                <span className="placeholder-size-label">Logo: 200 × 100 px</span>
                            </div>
                            <div className="home__sponsor-placeholder">
                                <span className="coming-soon-badge">Coming Soon</span>
                                <span className="placeholder-size-label">Logo: 200 × 100 px</span>
                            </div>
                            <div className="home__sponsor-placeholder">
                                <span className="coming-soon-badge">Coming Soon</span>
                                <span className="placeholder-size-label">Logo: 200 × 100 px</span>
                            </div>
                            <div className="home__sponsor-placeholder">
                                <span className="coming-soon-badge">Coming Soon</span>
                                <span className="placeholder-size-label">Logo: 200 × 100 px</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="home__cta">
                <div className="container">
                    <div className="home__cta-inner">
                        <div className="home__cta-text">
                            <h2>Looking Forward to Seeing You!</h2>
                            <p>
                                Step into a world of excellence, where exceptional deals and offers are designed
                                specifically for the senior community. Join us and discover what's possible.
                            </p>
                            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
                        </div>
                        <div className="home__cta-image">
                            <div className="home__cta-placeholder">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <path d="M21 15l-5-5L5 21" />
                                </svg>
                                <span>Event Highlights Photo</span>
                                <span className="placeholder-size-label">600 × 375 px (16:10 ratio)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
