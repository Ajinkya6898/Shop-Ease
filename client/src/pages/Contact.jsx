import React from "react";
import PageHeader from "../ui-components/PageHeader";
import Container from "../ui-components/Container";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

const Contact = () => {
  return (
    <Container>
      <PageHeader pageHeading="Contact Us" />
      <p className="text-lg text-center">
        Have questions or need assistance? Our team at{" "}
        <span className="font-semibold text-brand-500">ShopEase</span> is here
        to help!
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-brand-500">Get in Touch</h3>
          <p className="mt-3 text-gray-700 text-sm">
            Reach out via email or phone, and we'll be happy to assist you.
          </p>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-6 text-center text-xl">
                <MdOutlineMailOutline />
              </span>{" "}
              <span>Email: support@shopease.com</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 text-center text-xl">
                <LuPhoneCall />
              </span>{" "}
              <span>Phone: +1 234 567 890</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-brand-600">Visit Us</h3>
          <p className="mt-3 text-gray-700 text-sm">
            Come by our office for a face-to-face chat.
          </p>
          <p className="mt-3 text-gray-700 text-sm flex">
            <span className="w-6 text-center text-xl">
              <SlLocationPin />
            </span>{" "}
            123 Market Street, City, Country
          </p>
        </div>
      </div>

      <form className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
        <h3 className="text-xl font-semibold text-gray-700 text-center">
          Send Us a Message
        </h3>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-300 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-300 focus:outline-none"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-300 focus:outline-none"
        ></textarea>
        <button className="w-full bg-brand-500 text-white p-3 rounded-md font-semibold hover:bg-brand-600">
          Submit
        </button>
      </form>
    </Container>
  );
};

export default Contact;
