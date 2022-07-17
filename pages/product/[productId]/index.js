import React from "react";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <h1>Details of product {productId}</h1>;
};

export default ProductDetails;
