"use client";

import Image from "next/image";
import { inter } from "@/lib/fonts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store/store";
import { uiActions } from "@/lib/store/uiSlice";

export default function NavBar() {
  const dispatch = useDispatch<AppDispatch>();

  function handleOpenMobileNav() {
    dispatch(uiActions.openMobileNav());
  }

  return (
    <div className="bg-stone-50 flex justify-between px-3 py-4 border-b-2 border-stone-500">
      <div className="flex items-center gap-2">
        <Image
          className="w-8"
          src="/foodlogo.png"
          width="100"
          height="100"
          alt="Food Logo"
        />
        <h3 className={`font-medium text-xl ${inter.className}`}>
          Makaon Kita
        </h3>
      </div>

      <button onClick={() => handleOpenMobileNav()}>
        <Image src="/ui/menu.png" alt="menu button" width="25" height="25" />
      </button>
    </div>
  );
}
