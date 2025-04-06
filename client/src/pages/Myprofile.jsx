import React, { useState } from "react";
import PageHeader from "../ui-components/PageHeader";
import {
  FaLock,
  FaExclamationCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaEnvelope,
} from "react-icons/fa";
import Container from "../ui-components/Container";
import { PASSWORD_DONTS, PASSWORD_DOS } from "../constant";
import Button from "../ui-components/Button";

const MyProfile = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    currentEmail: "",
    newEmail: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    if (form.newPassword.length > 0 && form.newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");
    console.log("Form submitted successfully:", form);
  }

  function handleCancel() {
    setForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      currentEmail: "",
      newEmail: "",
    });
    setError("");
  }

  return (
    <>
      <Container maxWidth="max-w-5xl">
        <PageHeader pageHeading="My Profile" />

        <form onSubmit={handleSubmit} className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
                  {PASSWORD_DOS.map((text) => {
                    return (
                      <li key={text} className="text-base">
                        {text}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex flex-col">
                <p className="flex items-center text-xl gap-2 font-semibold text-gray-700 mb-2">
                  <FaTimesCircle className="text-red-500" />
                  Don'ts
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {PASSWORD_DONTS.map((text) => {
                    return (
                      <li key={text} className="text-base">
                        {text}
                      </li>
                    );
                  })}
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

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
                <label className="block text-gray-700 text-lg mb-1">
                  New Email
                </label>
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
        </form>
      </Container>
      <Container maxWidth="max-w-5xl" className="mt-6">
        <div className="flex justify-end gap-4 px-2">
          <Button
            type="button"
            onClick={handleCancel}
            appearance="secondary"
            variant="outlined"
          >
            Cancel
          </Button>

          <Button type="submit" size="medium">
            Save Changes
          </Button>
        </div>
      </Container>
    </>
  );
};

export default MyProfile;
