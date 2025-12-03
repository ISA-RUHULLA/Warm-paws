import React from 'react';

export default function Support() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
            <section className="container mx-auto bg-white shadow-md rounded-2xl p-8 ">
                <div className='max-w-4xl mx-auto'>
                    <h1 className="text-center text-3xl font-bold text-blue-800 mb-4">🐾 Pet Support & Assistance</h1>
                    <p className="text-center text-gray-700 text-lg mb-6">
                        At WarmPaws, we are here to provide timely support and guidance for all your<br />  winter pet care needs. Whether it's a general inquiry, emergency advice, or scheduling a vet visit,<br /> our team is ready to help.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">📞 Contact a Vet</h3>
                            <p className="text-gray-700">Speak directly with our licensed veterinarians for advice, consultations, and emergency support.</p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">💬 Live Chat Support</h3>
                            <p className="text-gray-700">Chat with our support team for quick answers to your winter pet care questions.</p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">📅 Schedule Visits</h3>
                            <p className="text-gray-700">Easily book at-home vet visits or check-ups to ensure your pets stay healthy and comfortable.</p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">📝 FAQs & Guides</h3>
                            <p className="text-gray-700">Access our detailed guides, tips, and frequently asked questions to manage winter challenges for your pets.</p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-700 mb-4">Need more help? Reach out to us anytime and we'll ensure your pet gets the care they deserve.</p>
                        <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Contact Support</a>
                    </div>
                </div>
            </section>
        </main>
    );
}