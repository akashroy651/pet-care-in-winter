import React from "react";
import vetsData from "../../JsonData/vatsData.json";

const VetsData = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Meet Our Expert Vets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vetsData.map((vet) => (
            <div
              key={vet.id}
              className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col gap-3"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-xl font-bold">
                {vet.name.charAt(0)}
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {vet.name}
              </h3>

              <p className="text-sm font-medium text-blue-600">
                {vet.qualification}
              </p>

              <p className="text-sm text-gray-500">
                Experience:{" "}
                <span className="font-medium text-gray-700">
                  {vet.experience}
                </span>
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                {vet.description}
              </p>

              <button className="mt-3 w-max px-4 py-2 text-sm border rounded-lg hover:bg-blue-600 hover:text-white transition mx-auto">
                Contact Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VetsData;
