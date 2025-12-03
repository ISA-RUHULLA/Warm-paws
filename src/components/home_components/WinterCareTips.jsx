import React, { useEffect, useState } from "react";

const WinterCareTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/extraData.json")
      .then((res) => res.json())
      .then((data) => setTips(data.winterCareTips));
  }, []);

  return (
    <div className="bg-yellow-100 p-10">
      <h2 className="text-3xl font-bold text-center py-6 text-black">
        🐾 Winter Care Tips for Pets
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="rounded-xl bg-white p-5 backdrop-blur-md shadow-md text-black hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold  mb-2">{tip.title}</h3>
            <p>{tip.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
