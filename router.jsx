import { Routes, Route } from "react-router-dom";
import { Cart, Dashboard, HomePage, Login, Orders, Profile, Signup } from "./src/pages";
import Layout from "./src/layout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};
