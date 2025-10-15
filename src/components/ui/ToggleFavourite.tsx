"use client";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store/store";
import { favouritesActions } from "@/lib/store/favouritesSlice";
import Image from "next/image";

export default function ToggleFavourite({ id }: { id: number }) {
  const dispatch = useDispatch<AppDispatch>();

  const favourites = useSelector(
    (state: RootState) => state.favourites.favouriteRecipes
  );

  const isFavourite = favourites.includes(id);

  const handleToggleFavourite = () => {
    dispatch(favouritesActions.toggleFavourite({ id }));
  };

  return (
    <button
      onClick={() => handleToggleFavourite()}
      className=" w-[50px] rounded-full bg-rose-400 p-3"
    >
      <Image
        src={`/ui/${isFavourite ? "favourite.png" : "notfavourite.png"}`}
        alt="favourite icon"
        width="550"
        height="550"
      />
    </button>
  );
}
