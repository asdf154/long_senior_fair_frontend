import './HeroSection.css';

const HeroSection = ({ title, subtitle, titleClassName, subtitleClassName }) => {
    return (
        <section className="hero">
            <div className="hero__overlay"></div>
            <div className="hero__content">
                {subtitle && <p className={`hero__subtitle ${subtitleClassName || ''}`}>{subtitle}</p>}
                <h1 className={`hero__title ${titleClassName || ''}`}>{title}</h1>
            </div>
        </section>
    );
};

export default HeroSection;
