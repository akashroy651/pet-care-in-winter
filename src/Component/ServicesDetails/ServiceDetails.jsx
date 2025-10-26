import { useParams, useNavigate } from "react-router";
import petCareData from "../JsonData/petCare.json";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = petCareData.find((s) => s.serviceId == id);

  return (
    <div className="max-w-2xl mx-auto p-6">

    

      <h1 className="text-3xl font-bold mb-4">{service.serviceName}</h1>
      <p className="text-gray-700 mb-2">Provider: {service.providerName}</p>
      <p className="text-green-600 font-semibold mb-2">Price: ${service.price}</p>
      <p className="text-yellow-500 mb-4">Rating: ⭐ {service.rating}</p>

      <p className="text-gray-600">
        {service.description || "No detailed description available."}
      </p>

  {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className=" mt-5  px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back
      </button>
    </div>
  );
};

export default ServiceDetails;
