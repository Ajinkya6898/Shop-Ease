import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import PageHeader from "../ui-components/PageHeader";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";
import FormRow from "../ui-components/FormRow";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
    navigate("/");
  };
  return (
    <Container maxWidth="max-w-lg" className="parent-container">
      <PageHeader pageHeading="Create an Account" />

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Name" error={errors.userName?.message}>
          <input
            {...register("userName", {
              required: "Name is required",
            })}
            type="text"
            autoComplete="off"
            placeholder="Full Name"
            className="input-container"
          />
        </FormRow>

        <FormRow label="Email" error={errors.email?.message}>
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

        <FormRow label="Password" error={errors.password?.message}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type="password"
            placeholder="Enter your password"
            className="input-container"
          />
        </FormRow>
        <FormRow
          label="Confirm Password"
          error={errors.confirmPassword?.message}
        >
          <input
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm Password"
            className="input-container"
          />
        </FormRow>
        <Button type="submit" size="large" className="w-full">
          Sign Up
        </Button>
      </form>

      <p className="text-center text-gray-700">
        Already have an account?{" "}
        <NavLink
          to="/login"
          className="text-brand-500 font-semibold hover:underline"
        >
          Sign In
        </NavLink>
      </p>
    </Container>
  );
};

export default Signup;
