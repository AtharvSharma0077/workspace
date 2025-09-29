import React, { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    onAdd({ name, price: parseFloat(price) });
    setName("");
    setPrice("");
  };

  return (
    <div className="product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
