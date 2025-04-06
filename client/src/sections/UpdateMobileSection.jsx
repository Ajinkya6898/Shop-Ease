import React from "react";

const UpdateMobileSection = ({ form, handleChange }) => {
  return (
    <section>
      <h2 id="update-mobile" className="text-2xl font-bold text-gray-800 mb-4">
        Update Mobile Number
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-lg mb-1">
            Current Mobile
          </label>
          <input
            type="tel"
            name="currentMobile"
            value={form.currentMobile}
            onChange={handleChange}
            placeholder="Enter current mobile number"
            className="input-container"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-lg mb-1">New Mobile</label>
          <input
            type="tel"
            name="newMobile"
            value={form.newMobile}
            onChange={handleChange}
            placeholder="Enter new mobile number"
            className="input-container"
          />
        </div>
      </div>
    </section>
  );
};

export default UpdateMobileSection;
