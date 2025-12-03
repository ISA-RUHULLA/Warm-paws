import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const ServiceCard = () => {
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All'); // Track active category
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
                setFilteredServices(data);

                const uniqueCategories = [...new Set(data.map((s) => s.category || 'Uncategorized'))];
                setCategories(uniqueCategories);
            });
    }, []);

    const handleFilter = (category) => {
        setActiveCategory(category); // Update active category
        if (category === 'All') {
            setFilteredServices(services);
        } else {
            const filtered = services.filter((s) => s.category === category);
            setFilteredServices(filtered);
        }
    };

    return (
        <div className='bg-blue-300 py-12 px-6 md:px-12 lg:px-20'>
            <div className='container mx-auto'>
                <h2 className='flex justify-center text-3xl font-bold mb-6'>
                    All Products ({filteredServices.length})
                </h2>

                {/* Category Buttons */}
                <div className='flex flex-wrap justify-center gap-3 mb-8'>
                    <button
                        onClick={() => handleFilter('All')}
                        className={`px-4 py-2 rounded-lg transition ${activeCategory === 'All' ? 'bg-blue-700 text-white' : 'bg-blue-400 text-white hover:bg-blue-500'
                            }`}
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleFilter(cat)}
                            className={`px-4 py-2 rounded-lg transition ${activeCategory === cat ? 'bg-blue-700 text-white' : 'bg-blue-400 text-white hover:bg-blue-500'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Service Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {filteredServices.map((service) => (
                        <div key={service.serviceId} className='rounded-xl shadow-md p-4 flex flex-col items-center bg-white'>
                            <img
                                src={service.image}
                                alt={service.serviceName}
                                className='w-full h-48 object-cover rounded-lg mb-3'
                            />
                            <h2 className='text-lg text-black font-bold'>{service.serviceName}</h2>
                            <p className='text-yellow-600 font-medium'>Rating: ⭐ {service.rating}</p>
                            <p className='text-lg font-semibold text-gray-800'>Price: ${service.price}</p>
                            <button
                                className='bg-blue-400 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-500 transition'
                                onClick={() => navigate(`/service/${service.serviceId}`)}
                            >
                                See Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
