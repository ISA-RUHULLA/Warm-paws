import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="bg-white py-16 shadow">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6"
                >
                    About <span className="text-blue-600">WarmPaws</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
                >
                    WarmPaws is dedicated to ensuring your pets stay happy, healthy, and comfortable during the colder months. We provide tailored care tips, seasonal nutrition advice, and access to professional veterinarians to help prevent winter-related illnesses. From cozy winter routines to emergency support, our platform empowers pet owners to give their furry companions the love and attention they deserve all season long.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                >
                    <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">🐾 Expert Pet Care Advice</h3>
                        <p className="text-gray-600">
                            Our veterinarians and pet specialists provide practical tips to keep your pets healthy and safe during the winter months.
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">❄️ Care Anytime, Anywhere</h3>
                        <p className="text-gray-600">
                            Get access to winter pet care guides, nutrition plans, and emergency advice from any device, whenever you need it.
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">🏡 Keep Your Pets Happy</h3>
                        <p className="text-gray-600">
                            From cozy winter routines to seasonal health tips, WarmPaws helps you ensure your furry friends stay warm, active, and content all season long.
                        </p>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-16"
                ><h3 className="text-2xl font-semibold text-blue-800 mb-4">
                        Our Vision
                    </h3>
                    <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
                        To create a safe, caring, and informative environment where pet owners can access expert guidance, seasonal tips, and trusted services, ensuring that every pet stays healthy, happy, and warm throughout the winter season.
                    </p>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
