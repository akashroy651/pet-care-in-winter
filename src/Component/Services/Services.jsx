import React from 'react';
import petCareData from '../JsonData/petCare.json'

const Services = () => {
    return (
        <div>
            <h1>hello services man</h1>

              <section>
                    <div>
                      <h1 className="text-2xl font-bold mb-4">Our Services</h1>
            
                      <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                          petCareData.map(service =>(
                        <div key={service.serviceId} className="p-4 border rounded-lg shadow">
                        <h2 className="text-xl font-semibold">{service.serviceName}</h2>
                        <p className="text-gray-600">Provider: {service.providerName}</p>
                        <p className="text-green-600 font-semibold">Price: ${service.price}</p>
                        <p className="text-yellow-500">Rating: ⭐ {service.rating}</p>
                      </div>
                          ))  
                        }
                      </div>
                    </div>
                  </section>
        </div>
    );
};

export default Services;