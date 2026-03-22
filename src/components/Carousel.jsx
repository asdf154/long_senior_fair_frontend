import { useState, useEffect, useCallback, useRef } from 'react';
import './Carousel.css';

const Carousel = ({ slides = [], autoPlayInterval = 4000 }) => {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const touchStartX = useRef(0);
    const touchDeltaX = useRef(0);
    const autoPlayRef = useRef(null);

    const defaultSlides = [
        { id: 1, label: 'Seniors Fair SG — Banner 1', image: '/assets/banner-1.jpeg' },
        { id: 2, label: 'Seniors Fair SG — Banner 2', image: '/assets/banner-2.jpeg' },
        { id: 3, label: 'Seniors Fair SG — Banner 3', size: '1472 × 644 px (16:7 ratio)' },
        { id: 4, label: 'Featured Sponsor', size: '1472 × 644 px (16:7 ratio)' },
    ];

    const items = slides.length > 0 ? slides : defaultSlides;
    const total = items.length;

    const goTo = useCallback((index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent(((index % total) + total) % total);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [isTransitioning, total]);

    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    // Auto-play
    useEffect(() => {
        autoPlayRef.current = setInterval(next, autoPlayInterval);
        return () => clearInterval(autoPlayRef.current);
    }, [next, autoPlayInterval]);

    const pauseAutoPlay = () => clearInterval(autoPlayRef.current);
    const resumeAutoPlay = () => {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = setInterval(next, autoPlayInterval);
    };

    // Touch handlers
    const handleTouchStart = (e) => {
        pauseAutoPlay();
        touchStartX.current = e.touches[0].clientX;
        touchDeltaX.current = 0;
    };

    const handleTouchMove = (e) => {
        touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    };

    const handleTouchEnd = () => {
        if (touchDeltaX.current > 50) prev();
        else if (touchDeltaX.current < -50) next();
        resumeAutoPlay();
    };

    // Get position class for each slide
    const getSlidePosition = (index) => {
        const diff = ((index - current) % total + total) % total;
        if (diff === 0) return 'active';
        if (diff === 1) return 'next';
        if (diff === total - 1) return 'prev';
        if (diff === 2) return 'far-next';
        if (diff === total - 2) return 'far-prev';
        return 'hidden';
    };

    return (
        <div
            className="carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
        >
            <div className="carousel__viewport">
                {items.map((slide, index) => {
                    const position = getSlidePosition(index);
                    return (
                        <div
                            className={`carousel__slide carousel__slide--${position}`}
                            key={slide.id || index}
                            onClick={() => {
                                if (position === 'next') next();
                                else if (position === 'prev') prev();
                            }}
                        >
                            <div className="carousel__slide-inner">
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
                        </div>
                    );
                })}
            </div>

            <button className="carousel__arrow carousel__arrow--prev" onClick={prev} aria-label="Previous slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <button className="carousel__arrow carousel__arrow--next" onClick={next} aria-label="Next slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>

            <div className="carousel__dots">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel__dot ${index === current ? 'carousel__dot--active' : ''}`}
                        onClick={() => goTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
