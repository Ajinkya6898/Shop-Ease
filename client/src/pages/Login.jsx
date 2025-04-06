import React from "react";
import PageHeader from "../ui-components/PageHeader";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../slices/userSlice";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";
import { useForm } from "react-hook-form";
import FormRow from "../ui-components/FormRow";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
    navigate("/");
  };

  return (
    <Container maxWidth="max-w-lg" className="parent-container">
      <PageHeader pageHeading="Login" />

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Email" error={errors.userName?.message}>
          <input
            {...register("userName", {
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

        <Button
          type="submit"
          size="large"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-gray-600">
          Don't have an account?
          <NavLink
            to="/signup"
            className="text-brand-500 font-medium hover:underline"
          >
            {" "}
            Sign up
          </NavLink>
        </p>
        <p className="mt-2">
          <NavLink
            to="/forgot-password"
            className="text-brand-500 font-medium hover:underline"
          >
            Forgot Password?
          </NavLink>
        </p>
      </div>
    </Container>
  );
};

export default Login;
