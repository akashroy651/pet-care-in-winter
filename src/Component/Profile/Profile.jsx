
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthProvider"; 
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user } = useContext(AuthContext); // Logged-in user
  const [editing, setEditing] = useState(false);
  const [inputData, setInputData] = useState({
    displayName: "",
    photoURL: "",
  });
  const [profileData, setProfileData] = useState({
    displayName: "Guest User",
    email: "",
    photoURL: "",
  });

  // Load user data when component mounts or user changes
  useEffect(() => {
    if (user) {
      setProfileData({
        displayName: user.displayName || "Anonymous",
        email: user.email,
        photoURL: user.photoURL || "https://via.placeholder.com/150",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
    setProfileData((prev) => ({ ...prev, [name]: value || prev[name] }));
  };

  const saveProfile = () => {
    if (!user) return;

    // Update Firebase user profile  <//
    updateProfile(user, {
      displayName: inputData.displayName || user.displayName,
      photoURL: inputData.photoURL || user.photoURL,
    })
      .then(() => {
        alert("Profile updated successfully!");
        setEditing(false);
      })
      .catch((err) => {
        alert("Error updating profile: " + err.message);
      });
  };

  const startEditing = () => {
    setInputData({ displayName: "", photoURL: "" }); // Clear inputs
    setEditing(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-base-200 p-6">
      <img
        src={profileData.photoURL}
        alt="Profile Avatar"
        className="w-32 h-32 rounded-full border-2 border-amber-500 shadow-lg"
      />
      <h1 className="text-3xl font-bold">{profileData.displayName}</h1>
      <p className="text-gray-700 text-lg">{profileData.email}</p>

      {!editing ? (
        <button className="btn btn-primary" onClick={startEditing}>
          Update Profile
        </button>
      ) : (
        <div className="flex flex-col gap-3 w-80 mt-4">
          <input
            type="text"
            name="displayName"
            value={inputData.displayName}
            onChange={handleInputChange}
            placeholder="Enter Full Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="photoURL"
            value={inputData.photoURL}
            onChange={handleInputChange}
            placeholder="Enter Photo URL"
            className="input input-bordered w-full"
          />
          <div className="flex gap-2 mt-2">
            <button className="btn btn-success flex-1" onClick={saveProfile}>
              Save
            </button>
            <button
              className="btn btn-outline flex-1"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
