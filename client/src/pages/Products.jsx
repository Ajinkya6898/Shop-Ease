import React from "react";
import { useLoaderData } from "react-router-dom";
import PageHeader from "../ui-components/PageHeader";
import ProductCard from "../ui-components/Card";
import Container from "../ui-components/Container";

const Products = () => {
  const products = useLoaderData();

  return (
    <Container maxWidth="max-w-9xl">
      <PageHeader pageHeading="Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;

async function loader() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return products;
  } catch (err) {
    return err;
  }
}

export { loader };
