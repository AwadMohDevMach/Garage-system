"use client"
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CommandMenu } from "@/components/comman-menu";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { KeyRound, LogIn, MailOpen } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export function SiteHeader() {
  const user =  {
    name: "awad",
    email:"awad@gmail.com",
    image: "hhtp//awad.png"
  }
    const router = useRouter();
    async function handleLogout() {
      await signOut()
      router.push("/login");
    }
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center gap-4">
              {user && user?.email ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className=" cursor-pointer">
                      {user.image ? (
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@Doctor"
                        />
                      ) : (
                        <AvatarFallback>DR</AvatarFallback>
                      )}
                    </Avatar>
                    <span className="sr-only">Toggle user menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel className="text-center">
                      {user.name}
                    </DropdownMenuLabel>
                    <DropdownMenuLabel className="text-center font-light text-sm text-slate-500">
                      {user.email}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleLogout()}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button asChild className=" w-20">
                  <Link href="/login">
                    <KeyRound className="h-4 w-4 shrink" /> Login
                  </Link>
                </Button>
              )}

              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
