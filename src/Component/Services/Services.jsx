import React from "react";
import petCareData from "../JsonData/petCare.json";
import { Link } from "react-router";

const Services = () => {
  return (
    <div>
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-4">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {petCareData.map((service) => (
              <div className="p-4 border rounded-lg shadow hover:shadow-lg hover:scale-105 transition">
                <h2 className="text-xl font-semibold">{service.serviceName}</h2>
                <p className="text-gray-600">
                  Provider: {service.providerName}
                </p>
                <p className="text-green-600 font-semibold">
                  Price: ${service.price}
                </p>
                <p className="text-yellow-500">Rating: ⭐ {service.rating}</p>
                <Link
                  to={`/services/${service.serviceId}`}
                  key={service.serviceId}
                >
                  <button className="btn">View details</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
