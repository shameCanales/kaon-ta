"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store/store";
import { uiActions } from "@/lib/store/uiSlice";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MobileNavBar() {
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();

  const mobileNavIsOpen = useSelector(
    (state: RootState) => state.ui.mobileNavIsOpen
  );

  function handleCloseMobileNav() {
    dispatch(uiActions.closeMobileNav());
  }

  useEffect(() => {
    dispatch(uiActions.closeMobileNav());
  }, [pathname, dispatch]);

  return (
    mobileNavIsOpen && (
      <div className="absolute z-99 top-0 left-0 w-full h-full bg-stone-950/80 text-stone-50 pt-10">
        <div className="flex justify-end">
          <button
            className="font-bold mr-5"
            onClick={() => handleCloseMobileNav()}
          >
            X Close
          </button>
        </div>
        <div className="flex justify-center mt-15">
          <ul className="grid gap-10 text-center">
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/recipes">
                <p>Recipes</p>
              </Link>
            </li>
            <li>
              <Link href="/favourites">
                <p>Favorites</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  );
}
