import React from "react";
import winterCareData from "../../JsonData/WinterCare.json";

const WinterCare = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Winter Care Tips for Pets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-6">
        {winterCareData.map((data) => (
          <div
            key={data.id}
            className=" rounded-xl p-5 shadow-md hover:shadow-2xl"
          >
            <h1 className="font-bold text-lg mb-2 text-gray-800">
              {data.title}
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCare;
