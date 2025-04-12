import React from "react";
import PageHeader from "../ui-components/PageHeader";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";
import FormRow from "../ui-components/FormRow";
import Spinner from "../ui-components/Spinner";

const ForgotPass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  function handleForgotSubmit(event) {
    navigate("/forgot-password/reset");
  }

  return (
    <>
      <Container maxWidth="max-w-lg" className="parent-container">
        <PageHeader pageHeading="Forgot Password" />

        <div className="text-center text-gray-600">
          <FaEnvelope className="mx-auto text-5xl text-brand-500 mb-4" />
          <p className="text-base">
            Enter the email address associated with your account and we’ll send
            you a one-time password (OTP).
          </p>
        </div>

        <form onSubmit={handleSubmit(handleForgotSubmit)}>
          <FormRow label="Email Address" error={errors.email?.message}>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              autoComplete="off"
              placeholder="Enter your email"
              className="input-container"
            />
          </FormRow>
          <Button
            type="submit"
            size="large"
            className="w-full mt-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner /> : "Get OTP"}
          </Button>
        </form>

        <div className="text-center text-sm text-gray-500">
          <NavLink
            to="/login"
            className="inline-flex items-center gap-2 text-brand-600 hover:underline"
          >
            <FaArrowLeft /> Back to Login
          </NavLink>
        </div>

        <div className="text-center text-xs text-gray-400 mt-4">
          Need help?{" "}
          <NavLink to="/contact" className="text-brand-500 hover:underline">
            Contact Support
          </NavLink>
        </div>
      </Container>
    </>
  );
};

export default ForgotPass;
