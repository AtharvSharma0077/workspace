import React from "react";

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Available Products</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
