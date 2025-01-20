import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Outlet } from "react-router-dom";
import { api } from "@/service";
import { useEffect } from "react";
export default function Layout() {
  useEffect(() => {
    api.get("/todos").then(response => {  console.log(response.data);  });
  });
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
