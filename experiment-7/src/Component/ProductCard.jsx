import React from "react";

function ProductCard({ name, price, status }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "15px",
        width: "150px",
        textAlign: "center",
      }}
    >
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default ProductCard;