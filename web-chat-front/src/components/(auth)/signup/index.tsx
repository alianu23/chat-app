"use client";
import React from "react";
import { SignupPart } from "./signupPart";
import { SignupToLogin } from "./signupToLogin";
import { useRouter } from "next/navigation";

type Props = {};

export const Signup = (props: Props) => {
  const router = useRouter();

  const goLogin = () => {
    router.replace("/login");
  };
  return (
    <div className="flex h-screen ">
      <SignupPart goLog={goLogin} />
      <SignupToLogin goLog={goLogin} />
    </div>
  );
};
