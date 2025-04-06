import React from "react";

const UpdateEmailSection = ({ form, handleChange }) => {
  return (
    <section>
      <h2 id="update-email" className="text-2xl font-bold text-gray-800 mb-4">
        Update Email Address
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-lg mb-1">
            Current Email
          </label>
          <input
            type="email"
            name="currentEmail"
            value={form.currentEmail}
            onChange={handleChange}
            placeholder="Enter current email"
            className="input-container"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-lg mb-1">New Email</label>
          <input
            type="email"
            name="newEmail"
            value={form.newEmail}
            onChange={handleChange}
            placeholder="Enter new email"
            className="input-container"
          />
        </div>
      </div>
    </section>
  );
};

export default UpdateEmailSection;
