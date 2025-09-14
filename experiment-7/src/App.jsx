import React from "react";
import ProductCard from "./Component/ProductCard.jsx";

function App() {
  const products = [
    { name: "Wireless Mouse", price: 25.99, status: "In Stock" },
    { name: "Keyboard", price: 45.5, status: "Out of Stock" },
    { name: "Monitor", price: 199.99, status: "In Stock" },
  ];

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        margin: "20px",
        textAlign: "center",
      }}
    >
      <h2>Products List</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            status={product.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;