import React from "react";

const ProductDetail = ({ params }: { params: { productId: string } }) => {
  return <div>Product {params.productId} detail page</div>;
};

export default ProductDetail;
