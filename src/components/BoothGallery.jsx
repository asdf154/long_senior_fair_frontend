import { useState, useRef, useCallback } from 'react';
import './BoothGallery.css';

const BoothGallery = ({ images = [] }) => {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(0);
    const touchDeltaX = useRef(0);
    const total = images.length;

    const goTo = useCallback((index) => {
        setCurrent(((index % total) + total) % total);
    }, [total]);

    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchDeltaX.current = 0;
    };

    const handleTouchMove = (e) => {
        touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    };

    const handleTouchEnd = () => {
        if (touchDeltaX.current > 40) prev();
        else if (touchDeltaX.current < -40) next();
    };

    if (total === 0) return null;

    return (
        <div
            className="booth-gallery"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="booth-gallery__track">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.alt || `Booth render ${index + 1}`}
                        className={`booth-gallery__image ${index === current ? 'booth-gallery__image--active' : ''}`}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                    />
                ))}
            </div>

            {total > 1 && (
                <>
                    <button className="booth-gallery__arrow booth-gallery__arrow--prev" onClick={prev} aria-label="Previous image">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button className="booth-gallery__arrow booth-gallery__arrow--next" onClick={next} aria-label="Next image">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                    <div className="booth-gallery__dots">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`booth-gallery__dot ${index === current ? 'booth-gallery__dot--active' : ''}`}
                                onClick={() => goTo(index)}
                                aria-label={`View image ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default BoothGallery;
