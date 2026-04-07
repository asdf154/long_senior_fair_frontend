import { useState, useEffect } from 'react';
import './CountdownBar.css';

const CountdownBar = () => {
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        const targetDate = new Date('2027-01-21T10:00:00');

        const updateTimer = () => {
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                secs: Math.floor((diff % (1000 * 60)) / 1000),
            });
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!timeLeft) return null;

    return (
        <div className="countdown-bar">
            <span className="countdown-label">Event starting in</span>
            <span className="countdown-separator">—</span>
            <span className="countdown-unit">
                <strong>{String(timeLeft.days).padStart(2, '0')}</strong> days
            </span>
            <span className="countdown-colon">:</span>
            <span className="countdown-unit">
                <strong>{String(timeLeft.hours).padStart(2, '0')}</strong> hrs
            </span>
            <span className="countdown-colon">:</span>
            <span className="countdown-unit">
                <strong>{String(timeLeft.mins).padStart(2, '0')}</strong> mins
            </span>
            <span className="countdown-colon">:</span>
            <span className="countdown-unit">
                <strong>{String(timeLeft.secs).padStart(2, '0')}</strong> secs
            </span>
        </div>
    );
};

export default CountdownBar;
