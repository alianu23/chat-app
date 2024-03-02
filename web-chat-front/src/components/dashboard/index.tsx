import React from "react";
import NavBar from "../navbar";
import { DashInfo } from "./dashInfo";
import { DashChat } from "./dashChat";

type Props = {};

export const Dashboard = (props: Props) => {
  return (
    <div className="flex w-full h-screen border-r-2 border-slate-500">
      <NavBar />
      <DashInfo />
      <DashChat />
    </div>
  );
};
