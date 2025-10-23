import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
      toast.success("✅ Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="border p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 items-center md:items-start bg-gray-900 text-white">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
        />

        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold">{user?.displayName || "No Name"}</h2>
          <p className="text-lg">{user?.email}</p>

          <form onSubmit={handleUpdate} className="mt-4 flex flex-col gap-3 bg-white/10 p-4 rounded-lg">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Update name"
              className="border p-2 rounded text-white"
            />
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Update photo URL"
              className="border p-2 rounded text-white"
            />
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
