import Link from "next/link";
import Image from "next/image";
import ToggleFavourite from "./ui/ToggleFavourite";
import { Recipe } from "@/lib/types/Recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <li className="shadow-sm relative bg-stone-50 rounded-2xl">
      <div className="absolute top-2 right-2">
        <ToggleFavourite id={recipe.id} />
      </div>

      <Link href={`/recipes/${recipe.id}`}>
        <Image
          src={recipe.image}
          alt={recipe.title}
          width="550"
          height="550"
          className="rounded-t-2xl w-full aspect-video"
        />

        <div className="py-6 pt-4 px-4">
          <p className="font-bold text-xl">{recipe.title}</p>
          <div className="mt-4 grid gap-3 text-stone-600">
            <div className="flex items-center gap-2">
              <Image
                src={"/scales.png"}
                alt={recipe.title}
                width="550"
                height="550"
                className="w-[20px]"
              />
              <p>{`${recipe.pricePerServing} per serving`}</p>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <Image
                  src={"/watch.png"}
                  alt={recipe.title}
                  width="550"
                  height="550"
                  className="w-[20px]"
                />
                <p>{`${recipe.readyInMinutes} mins`}</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={"/cardiogram.png"}
                  alt={recipe.title}
                  width="550"
                  height="550"
                  className="w-[20px]"
                />
                <p>Health Score: {recipe.healthScore}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap mt-4">
            {recipe.dishTypes.map((type) => {
              return (
                <p
                  className="bg-green-700 text-stone-50 text-sm py-2 px-3 rounded-3xl"
                  key={type}
                >
                  {type}
                </p>
              );
            })}
          </div>
        </div>
      </Link>
    </li>
  );
}
