import { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

const Carousel = ({ slides = [], autoPlayInterval = 4000 }) => {
    const [current, setCurrent] = useState(0);

    const defaultSlides = [
        { id: 1, label: 'Seniors Fair SG — Banner 1', size: '1472 × 644 px (16:7 ratio)' },
        { id: 2, label: 'Seniors Fair SG — Banner 2', size: '1472 × 644 px (16:7 ratio)' },
        { id: 3, label: 'Seniors Fair SG — Banner 3', size: '1472 × 644 px (16:7 ratio)' },
    ];

    const items = slides.length > 0 ? slides : defaultSlides;

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % items.length);
    }, [items.length]);

    useEffect(() => {
        const timer = setInterval(next, autoPlayInterval);
        return () => clearInterval(timer);
    }, [next, autoPlayInterval]);

    return (
        <div className="carousel">
            <div className="carousel__track" style={{ transform: `translateX(-${current * 100}%)` }}>
                {items.map((slide, index) => (
                    <div className="carousel__slide" key={slide.id || index}>
                        {slide.image ? (
                            <img src={slide.image} alt={slide.label || `Slide ${index + 1}`} />
                        ) : (
                            <div className="carousel__placeholder">
                                <div className="carousel__placeholder-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <path d="M21 15l-5-5L5 21" />
                                    </svg>
                                </div>
                                <span>{slide.label || `Image ${index + 1}`}</span>
                                {slide.size && <span className="carousel__placeholder-size">{slide.size}</span>}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="carousel__dots">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel__dot ${index === current ? 'carousel__dot--active' : ''}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <button className="carousel__arrow carousel__arrow--prev" onClick={() => setCurrent((current - 1 + items.length) % items.length)} aria-label="Previous slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <button className="carousel__arrow carousel__arrow--next" onClick={next} aria-label="Next slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </div>
    );
};

export default Carousel;
