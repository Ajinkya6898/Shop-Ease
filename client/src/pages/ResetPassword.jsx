import React from "react";
import { useForm } from "react-hook-form";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";
import FormRow from "../ui-components/FormRow";
import Spinner from "../ui-components/Spinner";

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
    <Container maxWidth="max-w-xl" className="parent-container">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-center">Reset Password</h1>
        <p className="text-sm text-gray-600 text-center">
          Set your new password below
        </p>

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
            className="w-full mt-3"
            type="submit"
            size="large"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner /> : "Reset Password"}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
