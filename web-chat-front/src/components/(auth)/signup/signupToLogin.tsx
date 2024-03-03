"use client";
import React from "react";

type Props = {
  goLog: () => void;
};

export const SignupToLogin = ({ goLog }: Props) => {
  return (
    <div className="w-[50%] bg-green-500 flex flex-col justify-center items-center gap-5 text-white">
      <h1 className="font-extrabold text-3xl">Welcome Back!</h1>
      <div className="flex flex-col items-center">
        <p className="text-slate-200">To keep connected with us please login</p>
        <p className="text-slate-200">with your personal info</p>
      </div>

      <button
        onClick={() => goLog()}
        className="hover:bg-green-200 px-10 py-3 hover:text-black  rounded-lg border-2"
      >
        Log in
      </button>
    </div>
  );
};
