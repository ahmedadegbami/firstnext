import React from "react";
import { useRouter } from "next/router";

const Reviews = () => {
  const router = useRouter();
  const { reviewId, productId } = router.query;

  return (
    <h1>
      product {productId} review {reviewId}
    </h1>
  );
};

export default Reviews;
