import React from "react";

const baseClasses =
  "rounded-lg font-semibold transition cursor-pointer focus:ring-2 focus:ring-offset-2 outline-0";

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

const appearanceClasses = {
  primary: {
    contained:
      "bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-500 ring-offset-white",
    outlined:
      "border border-brand-500 text-brand-500 hover:bg-brand-50 focus:ring-brand-500 ring-offset-white",
  },
  secondary: {
    contained:
      "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-600 ring-offset-white",
    outlined:
      "border border-gray-600 text-gray-600 hover:bg-gray-100 focus:ring-gray-600 ring-offset-white",
  },
  success: {
    contained:
      "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 ring-offset-white",
    outlined:
      "border border-green-500 text-green-500 hover:bg-green-50 focus:ring-green-500 ring-offset-white",
  },
  error: {
    contained:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 ring-offset-white",
    outlined:
      "border border-red-500 text-red-500 hover:bg-red-50 focus:ring-red-500 ring-offset-white",
  },
};

const Button = ({
  children,
  size = "medium",
  variant = "contained",
  appearance = "primary",
  className = "",
  type = "button",
  ...props
}) => {
  const sizeClass = sizeClasses[size] || sizeClasses.medium;
  const appearanceClass =
    (appearanceClasses[appearance] && appearanceClasses[appearance][variant]) ||
    appearanceClasses.primary.contained;

  const finalClass = `${baseClasses} ${sizeClass} ${appearanceClass} ${className}`;

  return (
    <button className={finalClass} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
