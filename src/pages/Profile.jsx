import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import userIcon from "../assets/blue-circle-with-white-user.jpg";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [showUpdate, setShowUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // update profile to firebase
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateProfile(auth.currentUser, {
        displayName: formData.name,
        photoURL: formData.photoURL,
      });

      // local user state update
      setUser({
        ...auth.currentUser,
      });

      toast.success(" Profile updated successfully!");
      setShowUpdate(false);
    } catch (error) {
      console.error(error);
      toast.error(" Failed to update profile!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-11/12 md:w-2/3 mx-auto my-10">
      <div className="border p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 items-center md:items-start bg-gray-800">
        <img
          src={formData.photoURL || userIcon}
          alt={formData.name}
          className="w-40 h-40 object-cover rounded-full"
        />

        <div className="flex-1 space-y-3 text-white">
          <h2 className="text-3xl font-bold">
            {user?.displayName || "No Name"}
          </h2>
          <p>
            Email: <span className="font-semibold">{user?.email}</span>
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setShowUpdate(!showUpdate)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              {showUpdate ? "Cancel Update" : "Update Profile"}
            </button>
          </div>

          {showUpdate && (
            <form
              onSubmit={handleUpdate}
              className="mt-6 flex flex-col gap-3 border p-4 rounded-lg bg-white/10 backdrop-blur-md text-black"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                className="border p-2 rounded bg-gray-100 cursor-not-allowed"
              />
              <input
                type="text"
                name="photoURL"
                placeholder="Enter photo URL"
                value={formData.photoURL}
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <button
                type="submit"
                disabled={loading}
                className={`bg-green-600 hover:bg-green-700 text-white py-2 rounded transition ${
                  loading && "opacity-70 cursor-not-allowed"
                }`}
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
