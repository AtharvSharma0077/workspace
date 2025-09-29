import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 75000 },
    { id: 2, name: "Smartphone", price: 30000 },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  return (
    <div className="app">
      <h1>Product Catalog</h1>
      <ProductList products={products} />
      <ProductForm onAdd={addProduct} />
    </div>
  );
}
