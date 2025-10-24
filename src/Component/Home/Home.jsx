import React from "react";
import img from "../../assets/pet.jpeg";
import petCareData from "../JsonData/petCare.json";

const Home = () => {
  return (
    <div>
      <h1>hi this home</h1>
      {/* // "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)", */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

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

export default Home;
