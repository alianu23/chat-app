import { TiPin } from "react-icons/ti";

interface Ipeople {
  name: string;
  chat: string;
  status: string;
}

export const people: Ipeople[] = [
  {
    name: "John Doe",
    chat: "How are you doing?",
    status: "/images/other/delivered.svg",
  },
  {
    name: "Travis Barker",
    chat: "....is typing",
    status: "/images/other/typing.svg",
  },
  {
    name: "Kate Rose",
    chat: "you: See you tommorrow",
    status: "/images/other/readed.svg",
  },
  {
    name: "Robert Parker",
    chat: "Awesome",
    status: "/images/other/delivered.svg",
  },
  {
    name: "John Doe",
    chat: "...is typing",
    status: "/images/other/typing.svg",
  },
  {
    name: "Jane Smith",
    chat: "you: Hello there!",
    status: "/images/other/readed.svg",
  },
  {
    name: "Michael Johnson",
    chat: "Sure thing!",
    status: "/images/other/newMessages.svg",
  },
  {
    name: "Sarah Lee",
    chat: "...is typing",
    status: "/images/other/typing.svg",
  },
  {
    name: "David Kim",
    chat: "you: What's the plan for today?",
    status: "/images/other/readed.svg",
  },
  {
    name: "Emily Nguyen",
    chat: "Sounds good to me.",
    status: "/images/other/delivered.svg",
  },
];
