import { useEffect } from 'react';
import './EnquiryDialog.css';

const EnquiryDialog = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="enquiry-dialog-overlay" onClick={onClose}>
            <div className="enquiry-dialog" onClick={(e) => e.stopPropagation()}>
                <button className="enquiry-dialog__close" onClick={onClose} aria-label="Close">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                <h2 className="enquiry-dialog__title">Enquiry to exhibit<br />Seniors Fair SG 2027</h2>
                <p className="enquiry-dialog__text">For enquiries, please reach out to us at:</p>
                <a href="mailto:enquiry@seniorsfair.sg" className="enquiry-dialog__email">
                    enquiry@seniorsfair.sg
                </a>
            </div>
        </div>
    );
};

export default EnquiryDialog;
