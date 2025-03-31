import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaSave,
  FaTimes,
} from "react-icons/fa";

export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    mobile: "+1234567890",
    password: "********",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen  text-white flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Profile Settings
        </h2>

        {/* Name */}
        <div className="flex items-center space-x-3 mb-4">
          <FaUser className="text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            disabled={!editMode}
            onChange={handleChange}
            className={`w-full p-2 bg-gray-700 rounded-lg focus:outline-none ${
              editMode ? "border border-blue-500" : "border-none"
            }`}
          />
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3 mb-4">
          <FaEnvelope className="text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled={!editMode}
            onChange={handleChange}
            className={`w-full p-2 bg-gray-700 rounded-lg focus:outline-none ${
              editMode ? "border border-blue-500" : "border-none"
            }`}
          />
        </div>

        {/* Mobile */}
        <div className="flex items-center space-x-3 mb-4">
          <FaPhone className="text-gray-400" />
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            disabled={!editMode}
            onChange={handleChange}
            className={`w-full p-2 bg-gray-700 rounded-lg focus:outline-none ${
              editMode ? "border border-blue-500" : "border-none"
            }`}
          />
        </div>

        {/* Password */}
        <div className="flex items-center space-x-3 mb-6">
          <FaLock className="text-gray-400" />
          <input
            type="password"
            name="password"
            value={formData.password}
            disabled={!editMode}
            onChange={handleChange}
            className={`w-full p-2 bg-gray-700 rounded-lg focus:outline-none ${
              editMode ? "border border-blue-500" : "border-none"
            }`}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          {editMode ? (
            <>
              <button
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                onClick={() => setEditMode(false)}
              >
                <FaSave /> <span>Save</span>
              </button>
              <button
                className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                onClick={() => setEditMode(false)}
              >
                <FaTimes /> <span>Cancel</span>
              </button>
            </>
          ) : (
            <button
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
