"use client";
import React from "react";
import { navIcons } from "./layer";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";

type Props = {};

const NavBar = (props: Props) => {
  const router = useRouter();
  const logout = () => {
    router.push("/login");
  };
  return (
    <div className="flex flex-col gap-5 justify-between px-5 py-5 items-center shadow-md shadow-slate-600s bg-slate-100">
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-semibold text-xl text-black pb-3 border-b-2 border-slate-500">
          User
        </h1>
        {navIcons.map((e, index) => (
          <button key={index}>{e.icon}</button>
        ))}
      </div>
      <div>
        <button>
          <IoMdSettings size={30} color="#27AE60" />
        </button>
        <button onClick={() => logout()}>
          <IoIosLogOut size={30} color="#27AE60" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
