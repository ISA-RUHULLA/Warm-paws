import React, { useEffect, useState } from "react";

const ExpertVets = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    fetch("/extraData.json")
      .then((res) => res.json())
      .then((data) => setVets(data.expertVets));
  }, []);

  return (
    <div className="bg-blue-200 p-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        🩺 Meet Our Expert Vets
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="rounded-xl shadow-lg backdrop-blur-md text-black p-4 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-32 h-32 object-cover rounded-full mb-3 border-4 text-white border-yellow-400"
            />
            <h3 className="text-lg font-semibold">{vet.name}</h3>
            <p className="text-gray-700">{vet.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertVets;

