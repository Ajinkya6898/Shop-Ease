import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../ui-components/Container";
import Button from "../ui-components/Button";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();

  const product = {
    id,
    name: "Wireless Headphones",
    price: 99.99,
    originalPrice: 149.99,
    description:
      "Experience next-level sound clarity with these high-quality wireless headphones. Equipped with noise cancellation, a 40-hour battery life, and sleek design, they are perfect for music lovers and professionals.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91ZspTLjkHmhsTymaQJivR3gla9A-GDGA_Q&s",
    stock: 12,
    rating: 4,
    category: "Electronics",
  };

  return (
    <>
      <Container className="max-w-12xl h-[400px] ">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </Container>

      <Container className="max-w-12xl mt-10 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

        <div className="flex items-center gap-4">
          <span className="text-2xl font-semibold text-brand-500">
            ₹ {product.price.toFixed(2)}
          </span>
          <span className="text-lg line-through text-gray-500">
            ₹ {product.originalPrice.toFixed(2)}
          </span>
          <span className="text-sm text-green-600 font-medium">
            ({Math.round(100 - (product.price / product.originalPrice) * 100)}%
            off)
          </span>
        </div>

        <p className="text-base text-gray-700 leading-relaxed tracking-wide">
          {product.description}
        </p>

        <p className="text-md text-gray-600">
          Category:{" "}
          <span className="text-gray-800 font-medium">{product.category}</span>
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-md text-gray-700 font-medium">Rating:</span>
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-5 h-5 ${
                  i < product.rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
        </div>

        <p className="text-md text-gray-600">
          {product.stock > 0 ? (
            <span className="text-green-600 font-medium">
              {product.stock} in stock
            </span>
          ) : (
            <span className="text-red-500 font-medium">Out of stock</span>
          )}
        </p>

        <div className="flex gap-6 pt-4">
          <Button appearance="primary" variant="contained" size="large">
            Add to Cart
          </Button>
          <Button appearance="secondary" variant="outlined" size="large">
            Add to Wishlist
          </Button>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
