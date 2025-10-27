// import React from "react";
// import img from '../../assets/resize.jpg'


// const Profile = () => {
//   return (
//     <div>
     
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col lg:flex-row">
//           <img
//             // src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//             src={img}
//             className="max-w-sm rounded-lg shadow-2xl"
//           />
//           <div>
//             <h1 className="text-5xl font-bold">Box Office News!</h1>
//             <p className="py-6">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;










// import React from "react";
// // তুমি চাইলে নিজের image path use করতে পারো, নচেৎ user.photoURL ব্যবহার হবে
// import img from '../../assets/resize.jpg'; 

// const Profile = ({ user }) => {
//   if (!user) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <p className="text-xl font-semibold">Please login first</p>
//       </div>
//     );
//   }

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row gap-10">
//         {/* User photo */}
//         <img
//           src={user.photoURL || img} // Firebase user photo অথবা fallback image
//           className="max-w-sm rounded-lg shadow-2xl"
//           alt="User Avatar"
//         />

//         {/* User info */}
//         <div>
//           <h1 className="text-5xl font-bold">{user.displayName}</h1>
//           <p className="py-4 text-lg text-gray-700">{user.email}</p>
//           <button
//             className="btn btn-primary"
//             onClick={() => alert("Update Profile coming soon!")}
//           >
//             Update Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;














import React from "react";
import img from "../../assets/resize.jpg"; // তুমি চাইলে অন্য image path দিতে পারো

const Profile = () => {
  // Static random data
  const user = {
    displayName: "John Doe",
    email: "johndoe@example.com",
    photoURL: img,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-base-200 p-6">
      <img
        src={user.photoURL}
        alt="User Avatar"
        className="w-32 h-32 rounded-full border-2 border-amber-500 shadow-lg"
      />
      <h1 className="text-3xl font-bold">{user.displayName}</h1>
      <p className="text-gray-700 text-lg">{user.email}</p>
      <button
        className="btn btn-primary"
        onClick={() => alert("Upload Profile coming soon!")}
      >
        Upload Profile
      </button>
    </div>
  );
};

export default Profile;

