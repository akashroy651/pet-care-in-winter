import React from "react";
import img from "../../assets/pet.jpeg";
import petCareData from "../JsonData/petCare.json";
import galleryData from '../JsonData/galleryData.json'
import { NavLink } from "react-router";


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

                        {/*  gallery img section */}

        <section>
            <div>
                 <div className="py-14 bg-gradient-to-b from-pink-50 to-white">
      <div className="text-center mb-10">
        <p className="text-sm font-bold text-rose-500 tracking-wide uppercase">
          Favorite Pets
        </p>
        <h2 className="text-4xl font-extrabold text-gray-800">Our Gallery</h2>
        <p className="text-gray-600 mt-1">
          Get ready for furr-mily hugs!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

        {galleryData.map(item => (
          <div key={item.id} className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-rose-500 bg-opacity-0 group-hover:bg-opacity-60 duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="px-3 py-1 bg-white text-rose-600 rounded-full text-xs font-semibold mb-2">
               <NavLink to="/services"> SERVICES</NavLink>
              </span>
              <h3 className="text-white font-bold text-xl">{item.title}</h3>
            </div>
          </div>
        ))}

      </div>
    </div>
            </div>
        </section>


    </div>
  );
};

export default Home;
