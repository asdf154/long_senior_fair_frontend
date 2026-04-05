import { useState } from 'react';
import HeroSection from '../components/HeroSection';
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
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        jobTitle: '',
        companyName: '',
        email: '',
        telephone: '',
        mobile: '',
        country: '',
        package: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent('Exhibit With Us Enquiry - Seniors Fair SG 2026');
        const body = encodeURIComponent(
            `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nJob Title: ${formData.jobTitle}\nCompany Name: ${formData.companyName}\nEmail: ${formData.email}\nTelephone: ${formData.telephone}\nMobile: ${formData.mobile}\nCountry: ${formData.country}\nPackage Interested In: ${formData.package}`
        );
        window.location.href = `mailto:enquiry@seniorsfair.sg?subject=${subject}&body=${body}`;
    };

    return (
        <div className="exhibitors">
            <HeroSection title="Exhibit With Us" subtitle="Seniors Fair SG" />

            <section className="exhibitors__intro section">
                <div className="container">
                    <h2 className="section-title">Exhibitor Booths & Packages</h2>
                    <p className="section-subtitle" style={{ whiteSpace: 'nowrap' }}>
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
                                <p className="exhibitors__booth-ideal">SMEs & First-time Exhibitors</p>
                                <p className="exhibitors__booth-size">9 sqm (3m x 3m)</p>
                                <ul className="exhibitors__booth-features">
                                    <li>Needle-punch Carpet</li>
                                    <li>White Polyester Wall Panels</li>
                                    <li>Fascia Board (Co. Name)</li>
                                    <li>1x Information Desk</li>
                                    <li>2x Folding Chairs</li>
                                    <li>1x 13amp Power Point</li>
                                    <li>2x Fluorescent Tubes</li>
                                    <li>Option to choose 1 Side Open</li>
                                    <li>Option to choose 2 Side Open</li>
                                </ul>
                            </div>
                        </div>

                        <div className="exhibitors__booth-card" data-booth="active-agers">
                            <div className="exhibitors__booth-image">
                                <BoothGallery images={activeAgersImages} />
                            </div>
                            <div className="exhibitors__booth-info">
                                <h3>Active Agers Booth</h3>
                                <p className="exhibitors__booth-ideal">Brands wanting high visibility</p>
                                <p className="exhibitors__booth-size">27 sqm (3m x 9m)</p>
                                <ul className="exhibitors__booth-features">
                                    <li>Everything in Legacy Booth</li>
                                    <li>Prime traffic flow location</li>
                                    <li>Option to choose 2 Side Open (Peninsula)</li>
                                    <li>Option to choose 3 Side Open (Corner)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="exhibitors__booth-card" data-booth="pioneers">
                            <div className="exhibitors__booth-image">
                                <BoothGallery images={pioneersImages} />
                            </div>
                            <div className="exhibitors__booth-info">
                                <h3>Pioneers Booth</h3>
                                <p className="exhibitors__booth-ideal">Custom Branding & Large Displays</p>
                                <p className="exhibitors__booth-size">54 sqm (6m x 9m)</p>
                                <ul className="exhibitors__booth-features">
                                    <li>Everything in Legacy Booth</li>
                                    <li>Prime traffic flow location</li>
                                    <li>Full flexibility for custom build</li>
                                    <li>Requires "Design-to-Print"</li>
                                    <li>Option to choose Bare Floor Space Only</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floor Plan Section */}
            <section className="exhibitors__floor-plan section">
                <div className="container">
                    <div className="exhibitors__floor-plan-map">
                        <div className="exhibitors__floor-plan-title-bar">
                            <span className="exhibitors__tentative-badge">TENTATIVE</span>
                            <span className="exhibitors__floor-plan-title-text">Floor Plan</span>
                        </div>
                        <img
                            src="/assets/floor-plan.svg"
                            alt="Seniors Fair SG - Hall 4 Floor Plan Layout (Tentative)"
                            className="exhibitors__floor-plan-image"
                        />
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="exhibitors__form-section section">
                <div className="container">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle" style={{ whiteSpace: 'nowrap' }}>Fill in your details and we'll get back to you about exhibiting at Seniors Fair SG 2026.</p>
                    <form className="exhibitors__form" onSubmit={handleSubmit}>
                        <p className="exhibitors__form-note">
                            Fields marked with an asterisk (<span>*</span>) are mandatory
                        </p>
                        <div className="exhibitors__form-grid">
                            <div className="exhibitors__field">
                                <label htmlFor="firstName">First Name <span>*</span></label>
                                <input type="text" id="firstName" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                            </div>
                            <div className="exhibitors__field">
                                <label htmlFor="lastName">Last Name <span>*</span></label>
                                <input type="text" id="lastName" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                            </div>
                            <div className="exhibitors__field">
                                <label htmlFor="jobTitle">Job Title <span>*</span></label>
                                <input type="text" id="jobTitle" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} required />
                            </div>
                            <div className="exhibitors__field">
                                <label htmlFor="companyName">Company Name <span>*</span></label>
                                <input type="text" id="companyName" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required />
                            </div>
                            <div className="exhibitors__field">
                                <label htmlFor="email">Email Address <span>*</span></label>
                                <input type="email" id="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="exhibitors__field">
                                <label htmlFor="telephone">Telephone <span>*</span></label>
                                <input type="tel" id="telephone" name="telephone" placeholder="Telephone" value={formData.telephone} onChange={handleChange} required />
                            </div>
                            <div className="exhibitors__field">
                                <label htmlFor="mobile">Mobile Telephone</label>
                                <input type="tel" id="mobile" name="mobile" placeholder="Mobile Telephone" value={formData.mobile} onChange={handleChange} />
                            </div>
                            <div className="exhibitors__field">
                                <label htmlFor="country">Country</label>
                                <input type="text" id="country" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
                            </div>
                            <div className="exhibitors__field exhibitors__field--full">
                                <label htmlFor="package">Which package are you interested in?</label>
                                <select id="package" name="package" value={formData.package} onChange={handleChange}>
                                    <option value="">Select a package</option>
                                    <option value="Legacy">Legacy</option>
                                    <option value="Active Agers">Active Agers</option>
                                    <option value="Pioneers">Pioneers</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="exhibitors__form-submit">
                            <button type="submit" className="btn btn-primary">Exhibit with us</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Exhibitors;
