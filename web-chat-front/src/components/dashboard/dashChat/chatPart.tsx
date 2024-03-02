import React from "react";

type Props = {
  message: string;
};

export const ChatPart = ({ message }: Props) => {
  return (
    <div className="py-5 px-5 flex items-center gap-3">
      <img
        src="images/user/user.avif"
        className="w-10 h-10 rounded-full"
        alt=""
      />
      <p className="bg-slate-50 px-3 py-2 rounded-md">{message}</p>
    </div>
  );
};
