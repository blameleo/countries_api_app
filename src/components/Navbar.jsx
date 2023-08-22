import React from "react";
import { BsMoon } from "react-icons/bs";

export default function Navbar({ setToggle, toggle }) {
  return (
    <nav
      className={`flex ${
        toggle ? "bg-slate-900 text-white" : "bg - white"
      } justify-between p-5 sm:px-16 shadow items-center`}
    >
      <h1 className="font-black text-lg">Where in the world?</h1>
      <div
        className="flex items-center  cursor-pointer"
        onClick={() => setToggle()}
      >
        <BsMoon className="mr-4" />
        <span> Dark Mode</span>
      </div>
    </nav>
  );
}
