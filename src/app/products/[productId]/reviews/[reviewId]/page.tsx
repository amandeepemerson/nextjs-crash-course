import { notFound } from "next/navigation";
import React from "react";

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
};

export default ReviewDetail;
