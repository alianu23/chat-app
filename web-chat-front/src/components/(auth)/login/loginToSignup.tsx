"use client";
import React from "react";

type Props = {
  goSign: () => void;
};

export const LoginToSignup = ({ goSign }: Props) => {
  return (
    <div className="w-[50%] bg-green-500 flex flex-col justify-center items-center gap-5 text-white">
      <h1 className="font-extrabold text-3xl">Hello, Friend</h1>
      <div className="flex flex-col items-center">
        <p className="text-slate-200">Enter your personel details and start</p>
        <p className="text-slate-200">journey with us</p>
      </div>

      <button
        onClick={() => goSign()}
        className="hover:bg-green-200 px-10 py-3 hover:text-black  rounded-lg border-2"
      >
        Sign up
      </button>
    </div>
  );
};
