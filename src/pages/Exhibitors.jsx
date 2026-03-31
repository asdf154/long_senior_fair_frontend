import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import EnquiryDialog from '../components/EnquiryDialog';
import BoothGallery from '../components/BoothGallery';
import './Exhibitors.css';

const legacyImages = [
    { src: '/assets/booths/3x3-corner-l.webp', alt: '3x3 Corner Booth - Left View' },
    { src: '/assets/booths/3x3-corner-r.webp', alt: '3x3 Corner Booth - Right View' },
    { src: '/assets/booths/3x3-sandwich-l.webp', alt: '3x3 Sandwich Booth - Left View' },
    { src: '/assets/booths/3x3-sandwich-r.webp', alt: '3x3 Sandwich Booth - Right View' },
    { src: '/assets/booths/3x3-set-6units-l.webp', alt: '3x3 Set (6 Units) - Left View' },
    { src: '/assets/booths/3x3-set-6units-r.webp', alt: '3x3 Set (6 Units) - Right View' },
];

const activeAgersImages = [
    { src: '/assets/booths/3x9-peninsula-l.webp', alt: '3x9 Peninsula Booth - Left View' },
    { src: '/assets/booths/3x9-peninsula-r.webp', alt: '3x9 Peninsula Booth - Right View' },
    { src: '/assets/booths/3x9-corner-l.webp', alt: '3x9 Corner Booth - Left View' },
    { src: '/assets/booths/3x9-corner-r.webp', alt: '3x9 Corner Booth - Right View' },
    { src: '/assets/booths/3x9-corner-set-2units-l.webp', alt: '3x9 Corner Set (2 Units) - Left View' },
    { src: '/assets/booths/3x9-corner-set-2units-r.webp', alt: '3x9 Corner Set (2 Units) - Right View' },
    { src: '/assets/booths/3x9-peninsula-set-2units-opposite-l.webp', alt: '3x9 Peninsula Set (2 Units) - Left View' },
    { src: '/assets/booths/3x9-peninsula-set-2units-opposite-r.webp', alt: '3x9 Peninsula Set (2 Units) - Right View' },
];

const pioneersImages = [
    { src: '/assets/booths/6x9-shortside-wall-l.webp', alt: '6x9 Shortside Wall - Left View' },
    { src: '/assets/booths/6x9-shortside-wall-r.webp', alt: '6x9 Shortside Wall - Right View' },
    { src: '/assets/booths/6x9-shortside-wall-f.webp', alt: '6x9 Shortside Wall - Front View' },
    { src: '/assets/booths/6x9-shortside-wall-s.webp', alt: '6x9 Shortside Wall - Side View' },
    { src: '/assets/booths/6x9-long-side-wall-l.webp', alt: '6x9 Long Side Wall - Left View' },
    { src: '/assets/booths/6x9-long-side-wall-r.webp', alt: '6x9 Long Side Wall - Right View' },
    { src: '/assets/booths/6x9-long-side-wall-f.webp', alt: '6x9 Long Side Wall - Front View' },
    { src: '/assets/booths/6x9-long-side-wall-s.webp', alt: '6x9 Long Side Wall - Side View' },
];

const Exhibitors = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

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
                        <div className="exhibitors__booth-card" data-booth="legacy">
                            <div className="exhibitors__booth-image">
                                <BoothGallery images={legacyImages} />
                            </div>
                            <div className="exhibitors__booth-info">
                                <h3>Legacy Booth</h3>
                                <p className="exhibitors__booth-ideal">Ideal for: SMEs & First-time Exhibitors</p>
                                <p className="exhibitors__booth-size">Minimum Size: 9 sqm (3m x 3m)</p>
                                <ul className="exhibitors__booth-features">
                                    <li>Needle-punch Carpet</li>
                                    <li>White Wall Panels</li>
                                    <li>Fascia Board (Co. Name)</li>
                                    <li>1x Information Desk</li>
                                    <li>2x Folding Chairs</li>
                                    <li>1x 13amp Power Point</li>
                                    <li>1x Fluorescent Tubes</li>
                                    <li>Option to choose 1 Side Open</li>
                                    <li>Option to choose 2 Side Open</li>
                                </ul>
                                <button className="btn btn-primary" onClick={() => setDialogOpen(true)}>Enquire with us</button>
                            </div>
                        </div>

                        <div className="exhibitors__booth-card" data-booth="active-agers">
                            <div className="exhibitors__booth-image">
                                <BoothGallery images={activeAgersImages} />
                            </div>
                            <div className="exhibitors__booth-info">
                                <h3>Active Agers Booth</h3>
                                <p className="exhibitors__booth-ideal">Ideal for: Brands wanting high visibility</p>
                                <p className="exhibitors__booth-size">Minimum Size: 27 sqm (3m x 9m)</p>
                                <ul className="exhibitors__booth-features">
                                    <li>Needle-punch Carpet</li>
                                    <li>White Wall Panels</li>
                                    <li>Fascia Board (Co. Name)</li>
                                    <li>3x Information Desk</li>
                                    <li>6x Folding Chairs</li>
                                    <li>3x 13amp Power Point</li>
                                    <li>3x Fluorescent Tubes</li>
                                    <li>Option to choose 2 Side Open (Peninsula)</li>
                                    <li>Option to choose 3 Side Open (Corner)</li>
                                    <li>Prime traffic flow location</li>
                                </ul>
                                <button className="btn btn-primary" onClick={() => setDialogOpen(true)}>Enquire with us</button>
                            </div>
                        </div>

                        <div className="exhibitors__booth-card" data-booth="pioneers">
                            <div className="exhibitors__booth-image">
                                <BoothGallery images={pioneersImages} />
                            </div>
                            <div className="exhibitors__booth-info">
                                <h3>Pioneers Booth</h3>
                                <p className="exhibitors__booth-ideal">Ideal for: Custom Branding & Large Displays</p>
                                <p className="exhibitors__booth-size">Minimum Size: 54 sqm (6m x 9m)</p>
                                <ul className="exhibitors__booth-features">
                                    <li>Needle-punch Carpet</li>
                                    <li>White Wall Panels</li>
                                    <li>Fascia Board (Co. Name)</li>
                                    <li>6x Information Desk</li>
                                    <li>12x Folding Chairs</li>
                                    <li>6x 13amp Power Point</li>
                                    <li>6x Fluorescent Tubes</li>
                                    <li>Full flexibility for custom build</li>
                                    <li>Requires "Design-to-Print"</li>
                                    <li>Option to choose Bare Floor Space Only</li>
                                    <li>Prime traffic flow location</li>
                                </ul>
                                <button className="btn btn-primary" onClick={() => setDialogOpen(true)}>Enquire with us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="exhibitors__contact section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Interested in Exhibiting?</h2>
                    <p className="section-subtitle">
                        Contact us to learn more about exhibitor packages and early bird pricing.
                    </p>
                    <button className="btn btn-secondary" onClick={() => setDialogOpen(true)}>Contact Us</button>
                </div>
            </section>

            <EnquiryDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
        </div>
    );
};

export default Exhibitors;
