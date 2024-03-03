import React from "react";
import { TiPin } from "react-icons/ti";

type Props = {
  person: {
    name: string;
    status: string;
    chat: string;
  };
};

const OneUser = ({ person }: Props) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div className="flex">
          <img
            src="/images/user/user.avif"
            alt="user"
            className="w-10 h-10 rounded-full relative"
          />
          <span className="w-3 h-3 rounded-full bg-green-400 absolute "></span>
        </div>
        <div className="flex flex-col text-sm font-medium  text-slate-500 ">
          <div className="flex ">
            <TiPin size={20} />
            <h3> {person.name}</h3>
          </div>
          <p className="text-sm font-medium  text-slate-400">{person.chat}</p>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <p className="text-slate-500">16:45</p>
        <img src={person.status} alt="delivered" className="w-8 h-6" />
      </div>
    </div>
  );
};

export default OneUser;
