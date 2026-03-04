import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isVisitorsOpen, setIsVisitorsOpen] = useState(false);
    const location = useLocation();
    const drawerRef = useRef(null);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close on route change
    useEffect(() => {
        setIsMobileOpen(false);
        setIsVisitorsOpen(false);
    }, [location]);

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileOpen]);

    // Close on ESC key
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') setIsMobileOpen(false);
    }, []);

    useEffect(() => {
        if (isMobileOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMobileOpen, handleKeyDown]);

    const closeMobile = () => setIsMobileOpen(false);

    const isActive = (path) => location.pathname === path;
    const isVisitorsActive = ['/exhibitors', '/floor-plan'].includes(location.pathname);

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <Link to="/" className="navbar__logo">
                    <img src="/assets/branding/fa-logo.png" alt="Seniors Fair SG" />
                </Link>

                {/* Desktop menu */}
                <ul className="navbar__menu">
                    <li>
                        <Link to="/" className={isActive('/') ? 'active' : ''}>HOME</Link>
                    </li>
                    <li
                        className="navbar__dropdown"
                        onMouseEnter={() => setIsVisitorsOpen(true)}
                        onMouseLeave={() => setIsVisitorsOpen(false)}
                    >
                        <span className={`navbar__dropdown-trigger ${isVisitorsActive ? 'active' : ''}`}>
                            VISITORS
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <ul className={`navbar__dropdown-menu ${isVisitorsOpen ? 'navbar__dropdown-menu--open' : ''}`}>
                            <li><Link to="/exhibitors">Exhibitors</Link></li>
                            <li><Link to="/floor-plan">Floor Plan</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/about" className={isActive('/about') ? 'active' : ''}>ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>CONTACT</Link>
                    </li>
                </ul>

                {/* Desktop social icons */}
                <div className="navbar__social">
                    <a href="#" aria-label="Facebook" className="navbar__social-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="navbar__social-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                </div>

                {/* Hamburger button */}
                <button
                    className={`navbar__hamburger ${isMobileOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileOpen}
                    aria-controls="mobile-drawer"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile drawer overlay */}
            <div
                className={`navbar__overlay ${isMobileOpen ? 'navbar__overlay--visible' : ''}`}
                onClick={closeMobile}
                aria-hidden="true"
            />

            {/* Mobile drawer */}
            <div
                id="mobile-drawer"
                ref={drawerRef}
                className={`navbar__drawer ${isMobileOpen ? 'navbar__drawer--open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                {/* Drawer header */}
                <div className="navbar__drawer-header">
                    <div></div>
                    <button className="navbar__drawer-close" onClick={closeMobile} aria-label="Close menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M18 6L6 18" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Drawer nav links */}
                <ul className="navbar__drawer-menu">
                    <li>
                        <Link
                            to="/"
                            className={`navbar__drawer-link ${isActive('/') ? 'navbar__drawer-link--active' : ''}`}
                            onClick={closeMobile}
                        >
                            HOME
                        </Link>
                    </li>

                    {/* Visitors accordion */}
                    <li className="navbar__drawer-accordion">
                        <button
                            className={`navbar__drawer-link navbar__drawer-accordion-trigger ${isVisitorsActive ? 'navbar__drawer-link--active' : ''}`}
                            onClick={() => setIsVisitorsOpen(!isVisitorsOpen)}
                            aria-expanded={isVisitorsOpen}
                        >
                            VISITORS
                            <svg
                                className={`navbar__drawer-chevron ${isVisitorsOpen ? 'navbar__drawer-chevron--open' : ''}`}
                                width="16" height="16" viewBox="0 0 16 16" fill="none"
                            >
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <ul className={`navbar__drawer-submenu ${isVisitorsOpen ? 'navbar__drawer-submenu--open' : ''}`}>
                            <li>
                                <Link
                                    to="/exhibitors"
                                    className={`navbar__drawer-sublink ${isActive('/exhibitors') ? 'navbar__drawer-sublink--active' : ''}`}
                                    onClick={closeMobile}
                                >
                                    Exhibitors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/floor-plan"
                                    className={`navbar__drawer-sublink ${isActive('/floor-plan') ? 'navbar__drawer-sublink--active' : ''}`}
                                    onClick={closeMobile}
                                >
                                    Floor Plan
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link
                            to="/about"
                            className={`navbar__drawer-link ${isActive('/about') ? 'navbar__drawer-link--active' : ''}`}
                            onClick={closeMobile}
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={`navbar__drawer-link ${isActive('/contact') ? 'navbar__drawer-link--active' : ''}`}
                            onClick={closeMobile}
                        >
                            CONTACT
                        </Link>
                    </li>
                </ul>

                {/* Drawer social icons */}
                <div className="navbar__drawer-social">
                    <a href="#" aria-label="Facebook" className="navbar__drawer-social-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="navbar__drawer-social-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
