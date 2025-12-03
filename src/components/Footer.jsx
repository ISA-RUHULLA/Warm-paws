import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-base-content p-10">
            <div className="footer sm:footer-horizontal max-w-7xl mx-auto">

                {/* Brand Info */}
                <aside>
                    <p> <span className='font-bold text-3xl'>WarmPaws</span> <br />
                        <span className="font-bold text-lg ">Industries Ltd.</span>
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
