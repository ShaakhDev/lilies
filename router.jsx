import { Routes, Route } from "react-router-dom";
import { HomePage } from "./src/pages";
import { Dashboard } from "./src/pages/dashboard/dashboard";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
