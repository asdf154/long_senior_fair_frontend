import HeroSection from '../components/HeroSection';
import './FloorPlan.css';

const FloorPlan = () => {
    return (
        <div className="floor-plan">
            <HeroSection title="Floor Plan" subtitle="Seniors Fair SG" />

            <section className="floor-plan__content section">
                <div className="container">
                    <div className="floor-plan__layout">
                        <div className="floor-plan__map">
                            <div className="floor-plan__title-bar">
                                <span className="floor-plan__tentative-badge">TENTATIVE</span>
                                <span className="floor-plan__title-text">Floor Plan</span>
                            </div>
                            <img
                                src="/assets/floor-plan.svg"
                                alt="Seniors Fair SG - Hall 4 Floor Plan Layout (Tentative)"
                                className="floor-plan__map-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FloorPlan;
