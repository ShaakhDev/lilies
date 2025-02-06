import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { api } from "@/service";
import { use } from "react";

export const Layout = () => {
  useEffect(() => {
    api.get("/todos").then(response => {
      console.log(response.data);
    });
  }, []);
  return (
    <main className="flex justify-start text-center">
      <Sidebar/>
      <Outlet />j
    </main>
  );
};
  