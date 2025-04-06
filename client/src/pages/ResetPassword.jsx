import React, { useState } from "react";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Container maxWidth="max-w-xl" className="parent-container">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-center">Reset Password</h1>
        <p className="text-sm text-gray-600 text-center">
          Set your new password below
        </p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              className="input-container"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="input-container"
              placeholder="Re-enter new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <Button className="w-full mt-3" type="submit" size="large">
          Reset Password
        </Button>
      </div>
    </Container>
  );
};

export default ResetPassword;
