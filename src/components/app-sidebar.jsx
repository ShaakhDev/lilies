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
} from "../components/ui/sidebar";
import { Link, Links } from "react-router-dom";

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
    <Sidebar className="bg=[#FBFBFB]">
      <SidebarHeader>
        <Link to="/"className="flex items-center justify-center h-12 gap-3 my-[90px]">
          <img src="logo.png" className="w-12" />
          <p className="font-bold text-2xl">Lilies</p>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupContent>
          <SidebarMenu className="p-[26px]">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link className="py-7" to={item.url}>
                    <item.icon />
                    <span className=" text-[16px]">{item.title}</span>
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
