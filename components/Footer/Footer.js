import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <h2>Pyscho<span className="art">Art</span></h2>
                <p>The best NFT marketplace website in the world and feel your experience in selling or buy our work</p>
            </div>
            <div className="footer-section">
                <h2>About</h2>
                <ul className="footer-section_links">
                    <li>Product</li>
                    <li>Resource</li>
                    <li>Terms and Condition</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>Company</h2>
                <ul className="footer-section_links">
                    <li>Our Team</li>
                    <li>Partner with us</li>
                    <li>Privacy & Policy</li>
                    <li>Features</li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>Contact</h2>
                <ul className="footer-section_links">
                    <li>+012 3456789</li>
                    <li>adorableprogrammer@gmail.com</li>
                    <li>
                        <i className="fab fa-youtube"/>
                        <i className="fab fa-discord"/>
                        <i className="fab fa-instagram"/>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
