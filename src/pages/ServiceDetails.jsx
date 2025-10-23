import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.serviceId === parseInt(id));
        setService(selected);

        const bookedItems =
          JSON.parse(localStorage.getItem("bookedServices")) || [];
        const alreadyBooked = bookedItems.some(
          (item) => item.serviceId === parseInt(id)
        );
        setIsBooked(alreadyBooked);
      });
  }, [id]);

  // form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields!");
      return;
    }

    const bookedItems =
      JSON.parse(localStorage.getItem("bookedServices")) || [];

    const updated = [
      ...bookedItems,
      { ...service, user: formData }, 
    ];
    localStorage.setItem("bookedServices", JSON.stringify(updated));

    setIsBooked(true);
    toast.success(` "${service.serviceName}" booked successfully!`);
    setFormData({ name: "", email: "" });
    setShowForm(false); 
  };

  if (!service)
    return (
      <p className="text-center mt-10 text-lg font-semibold">Loading...</p>
    );

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="border p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 items-center md:items-start">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full md:w-1/2  object-cover rounded-xl"
        />

        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold text-white">
            {service.serviceName}
          </h2>
          <p className="text-white">
            Provider: <span className="font-semibold">{service.providerName}</span>
          </p>
          <p className="text-white">Email: {service.providerEmail}</p>
          <p className="text-lg font-semibold text-white">
            Price: ${service.price}
          </p>
          <p className="text-yellow-600 font-medium">
            Rating: ⭐ {service.rating}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-5 py-2 rounded-lg font-medium transition"
            >
              ← Back
            </button>

            <button
              onClick={() => setShowForm(!showForm)}
              disabled={isBooked}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                isBooked
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isBooked ? "Booked " : showForm ? "Cancel" : "Book Now"}
            </button>
          </div>

          {/* Form show when Book Now clicked */}
          {showForm && !isBooked && (
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-3 border p-4 rounded-lg bg-white/10 backdrop-blur-md"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded text-white"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
              >
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
