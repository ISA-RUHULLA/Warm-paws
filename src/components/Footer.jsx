import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content p-10">
            <div className="footer sm:footer-horizontal max-w-7xl mx-auto">

                {/* Brand Info */}
                <aside>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p>
                        <span className="font-bold text-lg">Warm-Paws Industries Ltd.</span>
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>

                {/* Services Section */}
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Web Design</a>
                    <a className="link link-hover">Development</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Consulting</a>
                </nav>

                {/* Company Section */}
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Contact</a>
                </nav>

                {/* Legal Section */}
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Use</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>

                {/* Contact & Social */}
                <div>
                    <h6 className="footer-title">Contact Info</h6>
                    <p className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Green Street, Dhaka, Bangladesh</p>
                    <p className="flex items-center gap-2"><FaPhoneAlt /> +880 1711-000000</p>
                    <p className="flex items-center gap-2"><FaEnvelope /> support@warm-paws.com</p>

                    <div className="flex gap-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebookF /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600"><FaInstagram /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500"><FaTwitter /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm">
                © {new Date().getFullYear()} ACME Industries Ltd. | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
