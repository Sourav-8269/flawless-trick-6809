import React from "react";
import { Route, Routes } from "react-router-dom";
import Sorting from "../Components/Sorting";
import ProductManagement from "../Components/ProductManagement";
import AdminDashboard from "../Pages/AdminDashboard";
import Menu from "../Pages/Menu";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Otp from "../Pages/Otp";
import Cart from "../Pages/Cart";
import Deals from "../Pages/Deals";
import AdminLogin from "../Pages/AdminLogin";
import AdminLogout from "../Pages/AdminLogout";
import Edit from "../Pages/Edit";
import ProtectedRoute from "../Components/ProtectedRoute";
import Checkout from "../Pages/Checkout";
import UserLogin from "../Pages/UserLogin";
import UserRegister from "../Pages/UserRegister";
import Checkout2 from "../Pages/Context/Checkout2";
import ProtectedRoute2 from "../Components/ProtectedRoute2";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/cart" element={<ProtectedRoute2><Cart /></ProtectedRoute2>} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/product/:id" element={<Edit />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminlogout" element={<AdminLogout />} />
      <Route path="/checkout" element={<Checkout2 />} />
      <Route path="/userRegister" element={<UserRegister />} />
      <Route path="/userlogin" element={<UserLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/prod_managment" element={<ProductManagement />} />
      <Route path="/admin_sorting" element={<Sorting />} />
    </Routes>
  );
}

export default MainRoutes;
