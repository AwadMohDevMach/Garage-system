"use client";
import {
  Bell,
  Home,
  Timer,
  Package,
  Package2,
  Settings,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Sidebar({ user = false }: { user?: boolean }) {
  const pathName = usePathname();
  const router = useRouter();
  async function handleLogout() {
    await signOut();
    router.push("/login");
  }
  const sideBarLinks = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      label: user ? "My Appointments" : "Vehicles",
      href: user ? "/users/dashboard/appointments" : "/dashboard/appointments",
      icon: Timer,
      BadgeCount: 6,
    },
    {
      label: user ? "My Bookings" : "Bookings",
      href: user ? "/users/dashboard/patients" : "/dashboard/patients",
      icon: Package,
    },
    {
      label: "Payments",
      href: user ? "/users/dashboard/inbox" : "/dashboard/inbox",
      icon: Users,
    },

    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];
  return (
    <div className="hidden border-r bg-muted/40 md:block ">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {sideBarLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathName === item.href ? "bg-muted text-primary" : ""
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  {item.BadgeCount && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {item.BadgeCount}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Button onClick={handleLogout} size="sm" className="w-full mb-20">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
