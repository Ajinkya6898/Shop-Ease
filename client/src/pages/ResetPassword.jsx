import React from "react";
import { useForm } from "react-hook-form";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";
import FormRow from "../ui-components/FormRow";
import Spinner from "../ui-components/Spinner";
import { NavLink } from "react-router-dom";
import { PASSWORD_DOS } from "../constant";
import { FaCheckCircle } from "react-icons/fa";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Resetting password with:", data);
    // Handle password reset logic here
  };

  return (
    <Container maxWidth="max-w-lg" className="parent-container">
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold">Reset Your Password</h1>
          <p className="text-sm text-gray-600 mt-4">
            Enter your new password below. Make sure it’s strong and unique to
            keep your account secure.
          </p>
        </div>
        <input
          type="text"
          name="username"
          autoComplete="username"
          className="hidden"
          aria-hidden="true"
        />

        <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="font-medium mb-2 text-base text-gray-700">
            Password Guidelines:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            {PASSWORD_DOS.map((text) => (
              <li key={text} className="text-base">
                {text}
              </li>
            ))}
          </ul>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <FormRow label="New Password" error={errors.password?.message}>
            <input
              type="password"
              placeholder="Enter new password"
              autoComplete="new-password"
              className="input-container"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
          </FormRow>

          <FormRow
            label="Confirm Password"
            error={errors.confirmPassword?.message}
          >
            <input
              type="password"
              placeholder="Re-enter new password"
              autoComplete="new-password"
              className="input-container"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
          </FormRow>

          <Button
            className="w-full mt-4"
            type="submit"
            size="large"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner /> : "Reset Password"}
          </Button>
        </form>

        <div className="text-center text-sm text-gray-400 mt-6">
          <p>
            Didn’t request a password reset? You can safely ignore this page or{" "}
            <NavLink to="/contact" className="text-brand-500 hover:underline">
              contact support
            </NavLink>{" "}
            if you’re concerned.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ResetPassword;
