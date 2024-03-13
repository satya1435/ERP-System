import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";
import Orders from "./components/Orders/Orders";
import OrderCalendar from "./components/Orders/OrderCalendar"; 
import Header from "./components/Common/Header";

import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/calendar" element={<OrderCalendar />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
