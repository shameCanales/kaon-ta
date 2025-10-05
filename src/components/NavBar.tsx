"use client";

import Image from "next/image";
import { montserrat } from "@/lib/fonts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store/store";
import { uiActions } from "@/lib/store/uiSlice";
import Logo from "./ui/Logo";

export default function NavBar() {
  const dispatch = useDispatch<AppDispatch>();

  function handleOpenMobileNav() {
    dispatch(uiActions.openMobileNav());
  }

  return (
    <div className="bg-stone-50 fixed w-full flex justify-between px-3 py-4 border-b-1 rounded-b-xl border-stone-300 z-2">
      <Logo />

      <button onClick={() => handleOpenMobileNav()}>
        <Image src="/ui/menu.png" alt="menu button" width="25" height="25" />
      </button>
    </div>
  );
}
