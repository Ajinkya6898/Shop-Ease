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
    currentEmail: "",
    newEmail: "",
    mobile: "+1234567890",
    currentMobile: "",
    newMobile: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, newPassword });
    setPasswordError(
      validatePassword(newPassword)
        ? ""
        : "Password must contain at least 1 uppercase letter, 1 number, 1 special character, and be at least 8 characters long."
    );
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Profile Settings
        </h2>

        {/* Password Update */}
        {editMode && (
          <>
            <div className="flex flex-col mb-4">
              <label className="mb-1">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none border border-gray-600"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-1">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none border border-gray-600"
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
            <div className="flex flex-col mb-6">
              <label className="mb-1">Confirm New Password</label>
              <input
                type="password"
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none border border-gray-600"
              />
            </div>
          </>
        )}

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
