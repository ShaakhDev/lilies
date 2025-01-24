import { Bookmark, Calendar, Home, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Your profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: Calendar,
  },
  {
    title: "Your cart",
    url: "/cart",
    icon: Bookmark,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-center h-12 gap-3">
          <img src="logo.png" className="w-12" />
          <p className="font-bold text-2xl">Lilies</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link to={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
