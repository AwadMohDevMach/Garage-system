import { MainNavItem, SidebarNavItem } from "@/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/parking",
    },
    {
      title: "History",
      href: "/history",
    },
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Contact ",
      href: "/about",
    },
    {
      title: "Be Services Provider",
      href: "/join/doctors",
    },
  ],
};
