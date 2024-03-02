import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import OneUser from "./oneUserChat";
import { people } from "./datas";

type Props = {};

export const DashInfo = (props: Props) => {
  return (
    <div className=" bg-white w-[35%] px-5 py-5 text-black">
      <h1 className="font-extrabold text-black text-2xl">Messages</h1>
      <div className="flex items-center w-full my-5 px-3 rounded-md bg-slate-100">
        <IoSearchOutline size={20} color="black" />
        <input
          className="p-3 bg-slate-100"
          type="text"
          placeholder="Search messages..."
        />
      </div>
      <div className="flex gap-2 my-5">
        <p>sort by</p>
        <span className="text-blue-500 flex items-center">
          Newest <IoIosArrowDown />
        </span>
      </div>
      <div className="flex flex-col gap-5 w-full">
        {people.map((person) => (
          <OneUser key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
};
