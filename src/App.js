// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import AccountDetails from "./components/AccountDetails";
import Login from "./components/Login";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  }
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
        <Header isLoggedIn={isLoggedIn} username={username}/>
        <Routes>
          <Route path="/" element={<CategoryList categories={categories} />} />
          <Route path="/category/:categoryName" element={<ProductList products={products} />} />
          <Route path="/product/:productId" element={<ProductDetail products={products} />} />
          <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
          <Route path="/account-details" element={<AccountDetails username={username}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
