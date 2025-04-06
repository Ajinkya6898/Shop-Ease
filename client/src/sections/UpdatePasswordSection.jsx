import React from "react";
import { FaLock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { PASSWORD_DOS, PASSWORD_DONTS } from "../constant";

const UpdatePasswordSection = ({ form, handleChange }) => {
  return (
    <section>
      <h2 id="update-pass" className="text-2xl font-bold text-gray-800 mb-4">
        Change Password
      </h2>

      <div className="text-center text-gray-600">
        <FaLock className="mx-auto text-5xl text-brand-500 mb-4" />
        <p className="text-base">
          Keep your account secure by using a strong and unique password.
        </p>
      </div>

      <div className="bg-gray-100 flex justify-between p-4 rounded-lg mt-6 text-sm gap-8 flex-wrap sm:flex-nowrap">
        <div className="flex flex-col">
          <p className="flex items-center text-xl gap-2 font-semibold text-gray-700 mb-2">
            <FaCheckCircle className="text-green-600" />
            Do's
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {PASSWORD_DOS.map((text) => (
              <li key={text} className="text-base">
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="flex items-center text-xl gap-2 font-semibold text-gray-700 mb-2">
            <FaTimesCircle className="text-red-500" />
            Don'ts
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {PASSWORD_DONTS.map((text) => (
              <li key={text} className="text-base">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-gray-700 text-lg mb-1">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            placeholder="Enter current password"
            className="input-container"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-lg mb-1">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
            className="input-container"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-lg mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter new password"
            className="input-container"
          />
        </div>
      </div>
    </section>
  );
};

export default UpdatePasswordSection;
