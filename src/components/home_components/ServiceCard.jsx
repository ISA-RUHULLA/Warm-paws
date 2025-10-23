import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const ServiceCard = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className='w-11/12 mx-auto gap-5'>
            <div className='mt-5'>
                <h2 className='flex justify-center text-2xl font-bold mb-4'>
                    All Products ({services.length})
                </h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {services.map((service) => (
                    <div key={service.serviceId} className='border-2 rounded-xl shadow-md p-4 flex flex-col items-center'>
                        <img
                            src={service.image}
                            alt="image paoya gelo na"
                            className='w-full h-48 object-cover rounded-lg mb-3'
                        />
                        <h2 className='text-lg font-semibold'>{service.serviceName}</h2>
                        <p className="text-yellow-600 font-medium">
                            Rating: ⭐ {service.rating}
                        </p>
                        <p className="text-lg font-semibold text-white">
                            Price: ${service.price}
                        </p>
                        <button
                            className="btn btn-block bg-white text-black"
                            onClick={() => navigate(`/service/${service.serviceId}`)}
                        >
                            See Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCard;
