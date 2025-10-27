

import React, { useState } from "react";
import defaultAvatar from "../../assets/resize.jpg";

const Profile = () => {
  // Default user info
  const [userProfile, setUserProfile] = useState({
    fullName: "Akash Roy",
    emailAddress: "akashroy@example.com",
    avatar: defaultAvatar,
  });

  // Editing mode
  const [editing, setEditing] = useState(false);

  // Form inputs (empty when edit starts)
  const [inputData, setInputData] = useState({
    fullName: "",
    emailAddress: "",
    avatar: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });

    // Live preview in profile card
    setUserProfile((prev) => ({ ...prev, [name]: value || prev[name] }));
  };

  // Save updated profile
  const saveProfile = () => {
    setUserProfile({ ...userProfile, ...inputData });
    setInputData({ fullName: "", emailAddress: "", avatar: "" }); // Clear form
    setEditing(false);
    alert("Your profile has been updated 🎉");
  };

  // Start editing
  const startEditing = () => {
    setInputData({ fullName: "", emailAddress: "", avatar: "" }); // Clear inputs
    setEditing(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-base-200 p-6">
      {/* Profile Card */}
      <img
        src={userProfile.avatar}
        alt="Profile Avatar"
        className="w-32 h-32 rounded-full border-2 border-amber-500 shadow-lg"
      />
      <h1 className="text-3xl font-bold">{userProfile.fullName}</h1>
      <p className="text-gray-700 text-lg">{userProfile.emailAddress}</p>

      {!editing ? (
        <button className="btn btn-primary" onClick={startEditing}>
          Update Profile
        </button>
      ) : (
        <div className="flex flex-col gap-3 w-80 mt-4">
          <input
            type="text"
            name="fullName"
            value={inputData.fullName}
            onChange={handleInputChange}
            placeholder="Enter Full Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="emailAddress"
            value={inputData.emailAddress}
            onChange={handleInputChange}
            placeholder="Enter Email"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="avatar"
            value={inputData.avatar}
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

