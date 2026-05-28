// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
import React from "react";
import {SiteHeader} from "../../components/SiteHeader";
import SideBar from "../../components/dashbaord/SideBar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="">
      <SiteHeader/>

      <div className="grid grid-cols-4 mt-4 border-t-4 h-screen">
        <SideBar/>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
