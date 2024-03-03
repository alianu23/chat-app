"use client";
import React from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

type Props = {
  goLog: () => void;
};

export const SignupPart = ({ goLog }: Props) => {
  return (
    <div className="w-[50%] bg-white flex items-center justify-center flex-col gap-5 px-72">
      <h1 className="font-extrabold text-3xl">Create Account</h1>
      <div className="flex gap-4">
        <button className="hover:bg-blue-200 p-3 rounded-full border-2">
          <FaFacebookF size={30} />
        </button>
        <button className="hover:bg-blue-200 p-3 rounded-full border-2">
          <FaGooglePlusG size={30} />
        </button>
        <button className="hover:bg-blue-200 p-3 rounded-full border-2">
          <FaLinkedinIn size={30} />
        </button>
      </div>
      <p className="text-slate-400">or use your email for registration</p>
      <input
        type="text"
        placeholder="Name"
        className="bg-slate-200 p-3 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Email"
        className="bg-slate-200 p-3 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Password"
        className="bg-slate-200 p-3 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Re-Password"
        className="bg-slate-200 p-3 rounded-md w-full"
      />
      <p className="text-slate-400">Forgot your Password?</p>
      <button
        onClick={() => goLog()}
        className="hover:bg-green-500 px-10 py-3 hover:text-white text-black rounded-lg border-2"
      >
        Sign up
      </button>
    </div>
  );
};
