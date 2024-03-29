import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useState } from "react";
import Reviews from "../components/UI/reviews/reviews";
import { AuthProvider } from "../pages/auth";
import RequireAuth from "../pages/RequireAuth";
// import ProtectedRoutes from "./proutes";

const Routers = () => {
  const [user, setUser] = useState(null);
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        <Route
          path="/foods"
          element={<AllFoods user={user} setUser={setUser} />}
        />
        <Route path="/foods/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<RequireAuth><Reviews /></RequireAuth>} />
      </Routes>
    </AuthProvider>
  );
};

export default Routers;
