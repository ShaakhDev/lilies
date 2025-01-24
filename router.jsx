import { Routes, Route } from "react-router-dom";
import { Cart, HomePage, Orders, Profile, Dashboard } from "@/pages";
import Layout from "@/layout";
import { Login } from "@/pages/login";
import { Signup } from "@/pages/signup";
import { PrivateRoute } from "@/private-route";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};
