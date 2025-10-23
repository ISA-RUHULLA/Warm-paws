import React, { useEffect, useState } from "react";

const WinterCareTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/extraData.json")
      .then((res) => res.json())
      .then((data) => setTips(data.winterCareTips));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        🐾 Winter Care Tips for Pets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="border rounded-xl p-5 bg-white/10 backdrop-blur-md shadow-md text-white hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-white">{tip.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
