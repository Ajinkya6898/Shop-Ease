import React, { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    async function prot() {
      const res = await fetch("https://fakestoreapi.com/products");
      const prod = await res.json();
      console.log(prod);
    }
    prot();
  }, []);
  return <div>Products</div>;
};

export default Products;
