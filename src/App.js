// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import AccountDetails from "./components/AccountDetails";
import "./App.css";

function App() {
  const categories = ["Electronics", "Clothing", "Books"];
  const products = {
    Electronics: [
      { id: 1, name: "Laptop 1", description: "A high performance Laptop", price: 999.99 },
      { id: 2, name: "SmartPhone", description: "A latest model SmartPhone", price: 799.99 }
    ],
    Clothing: [
      { id: 3, name: "T-shirt", description: "A comfortable t-shirt", price: 19.99 },
      { id: 4, name: "SmartPhone", description: "A latest model SmartPhone", price: 49.99 }
    ],
    Books: [
      { id: 5, name: "Book 1", description: "A fascinating book", price: 14.99 },
      { id: 6, name: "Book 2", description: "Another interesting book", price: 24.99 }
    ],
  };

  const account = {
    name: "John Doe",
    email: "john.doe@example.com"
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CategoryList categories={categories} />} />
          <Route path="/category/:categoryName" element={<ProductList products={products} />} />
          <Route path="/product/:productId" element={<ProductDetail products={products} />} />
        </Routes>
        <AccountDetails account={account} />
      </div>
    </Router>
  );
}

export default App;
