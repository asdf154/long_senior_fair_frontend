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
                            <img
                                src="/assets/floor-plan.svg"
                                alt="Seniors Fair SG - Hall 4 Floor Plan Layout"
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
