"use client";
import React, { useState } from "react";
import { ImNotification } from "react-icons/im";
import { IoVideocamOutline } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";
import { ChatPart } from "./chatPart";

type Props = {};

export const DashChat = (props: Props) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const sendMessage = () => {
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="bg-slate-100 w-[100%] text-black border-l-2">
      <div className="flex justify-between items-center bg-white px-5 py-3">
        <div className="flex gap-2 items-center">
          <img
            src="/images/user/user.avif"
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <div>
            <h1 className="">John Doe</h1>
            <p className="text-sm text-green-500">online</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <IoVideocamOutline size={30} color="#27AE60" />
          <ImNotification size={20} color="#8C8C8C" />
        </div>
      </div>
      <div className="bg-slate-100 h-[85%]">
        <div className="fixed bottom-24">
          {messages.map((message, index) => (
            <ChatPart message={message} key={index} />
          ))}
        </div>
      </div>

      <div className="flex flex-row bg-white h-[8%] items-center justify-between p-3">
        <div className="flex items-center gap-2 w-[85%]">
          <button className="px-5 hover:bg-slate-300 py-5 rounded-md">
            <ImAttachment size={20} color="#8C8C8C" />
          </button>

          <input
            className=" bg-slate-100 p-3 rounded-md w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type your message here"
          />
        </div>

        <button
          onClick={sendMessage}
          className="p-3 text-green-500 mr-4 rounded-md hover:bg-green-500 hover:text-white"
        >
          Send message
        </button>
      </div>
    </div>
  );
};
