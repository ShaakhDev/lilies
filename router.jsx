import { Routes, Route } from "react-router-dom";
import { HomePage } from "./src/pages";
import { Layout } from "./src/layout";
import { Dashboard } from "./src/others/dashboard";
import { Profile } from "./src/others/profile";
import { Cart } from "./src/others/cart";
import { Orders } from "./src/others/orders";
import { Sign, Login } from "./src/file";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/sign" element={<Sign />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} /> 
      </Route>
    </Routes>
  );
};
