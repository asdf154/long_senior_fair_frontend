import HeroSection from '../components/HeroSection';
import './FloorPlan.css';

const FloorPlan = () => {
    return (
        <div className="floor-plan">
            <HeroSection title="Floor Plan" subtitle="Seniors Fair SG" />

            <section className="floor-plan__content section">
                <div className="container">
                    <div className="floor-plan__layout">
                        <div className="floor-plan__info">
                            <h2 className="floor-plan__venue-title">
                                Seniors Fair SG
                            </h2>
                            <p className="floor-plan__venue-sub">
                                Singapore's premier seniors fair at a quick glance:
                            </p>

                            <div className="floor-plan__stats">
                                <div className="floor-plan__stat">
                                    <div className="floor-plan__stat-icon">
                                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-sky-blue)" strokeWidth="1.5">
                                            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Coming Soon</h4>
                                        <p>Floor Area</p>
                                    </div>
                                </div>

                                <div className="floor-plan__stat">
                                    <div className="floor-plan__stat-icon">
                                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-hot-pink)" strokeWidth="1.5">
                                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Coming Soon</h4>
                                        <p>Exhibitors</p>
                                    </div>
                                </div>

                                <div className="floor-plan__stat">
                                    <div className="floor-plan__stat-icon">
                                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-sky-blue)" strokeWidth="1.5">
                                            <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Coming Soon</h4>
                                        <p>Event Days</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="floor-plan__map">
                            <div className="floor-plan__map-placeholder">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="3" y1="15" x2="21" y2="15" />
                                    <line x1="9" y1="3" x2="9" y2="21" />
                                    <line x1="15" y1="3" x2="15" y2="21" />
                                </svg>
                                <span>Floor Plan Image</span>
                                <span className="coming-soon-badge">Coming Soon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FloorPlan;
