import React from "react";
import PageHeader from "../ui-components/PageHeader";
import Container from "../ui-components/Container";
import { HiOutlineCheckCircle } from "react-icons/hi2";

const About = () => {
  return (
    <Container>
      <PageHeader pageHeading="About Us" />
      <p className="text-lg text-center text-gray-700 leading-relaxed">
        Welcome to{" "}
        <span className="font-semibold text-brand-600">ShopEase </span> , your
        ultimate online shopping hub! We bring you the best shopping experience
        with a vast selection of products, unbeatable deals, and top-notch
        service.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-brand-600">
            Why Choose Us?
          </h3>
          <ul className="mt-3 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-6 text-center text-xl">
                <HiOutlineCheckCircle />
              </span>
              <span>Wide Selection of Products</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 text-center text-xl">
                <HiOutlineCheckCircle />
              </span>
              <span>Affordable Prices & Exclusive Deals</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 text-center text-xl">
                <HiOutlineCheckCircle />
              </span>
              <span>Fast & Secure Checkout</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 text-center text-xl">
                <HiOutlineCheckCircle />
              </span>
              <span>24/7 Customer Support</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-brand-600">Our Mission</h3>
          <p className="mt-4 text-gray-700 text-sm">
            We strive to revolutionize online shopping by making it{" "}
            <span className="font-semibold">
              easy, enjoyable, and rewarding
            </span>
            for everyone.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
        <p className="mt-3 text-gray-700 text-sm">
          Integrity, innovation, and customer satisfaction drive everything we
          do. We are committed to offering high-quality products and a
          hassle-free shopping experience.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          What Our Customers Say
        </h3>
        <p className="mt-3 italic text-gray-600">
          "ShopEase has completely transformed my shopping experience! Amazing
          deals and exceptional service!"
        </p>
        <p className="mt-2 font-semibold text-gray-700">- Ajinkya J.</p>
      </div>

      <div className="text-center mt-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Join Our Community
        </h3>
        <p className="mt-3 text-gray-700">
          Stay updated with the latest trends, deals, and exclusive discounts.
        </p>
        <button className="mt-4 bg-brand-500 text-white px-6 py-2 rounded-lg hover:bg-brand-600 transition">
          Subscribe Now
        </button>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-700">Need assistance? Reach out to us at</p>
        <p className="font-semibold text-brand-500">support@shopease.com</p>
      </div>
    </Container>
  );
};

export default About;
