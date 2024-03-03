"use client";
import React from "react";
import { LoginToSignup } from "./loginToSignup";
import { LoginPart } from "./loginPart";
import { useRouter } from "next/navigation";

type Props = {};

export const Login = (props: Props) => {
  const router = useRouter();
  const goDashboard = () => {
    router.replace("/");
  };
  const goSignup = () => {
    router.replace("/signup");
  };
  return (
    <div className="flex h-screen">
      <LoginToSignup goSign={goSignup} />
      <LoginPart goDash={goDashboard} />
    </div>
  );
};
