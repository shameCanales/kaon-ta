"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useGetRecipeById } from "@/lib/hooks/useGetRecipeById";
import { montserrat } from "@/lib/fonts";
import { useState } from "react";

export default function RecipeDetails() {
  const params = useParams();
  const { id } = params;
  const { data, isLoading, isError, error } = useGetRecipeById(Number(id));
  const [seeMoreDescription, setSeeMoreDescription] = useState(false);

  const handleSeeMoreDescription = () => {
    setSeeMoreDescription(!seeMoreDescription);
  };

  let content = (
    <div>
      <h1>Refresh page to get information</h1>
    </div>
  );

  if (isLoading) {
    content = (
      <div>
        <h1>Loading Information...</h1>
      </div>
    );
  }

  if (isError) {
    content = (
      <div>
        <h1>Something went wrong...</h1>
      </div>
    );
  }

  if (data) {
    const cleanSummary = data.summary.replace(/<[^>]*>/g, "");

    content = (
      <div className="px-4">
        <Image
          className="rounded-b-4xl aspect-square h-[391px] "
          src={data.image}
          alt={data.title}
          width={1920}
          height={1080}
        />

        <div className="flex mt-5 gap-4">
          <div className="flex items-end gap-1">
            <Image
              className="w-[16px] mb-1.5"
              src={"/time-quarter-to.png"}
              alt={data.title}
              width={1920}
              height={1080}
            />
            <div>
              <p className={`text-xs font-bold`}>PREP TIME</p>
              <p className="text-stone-600">
                <span
                  className={`font-bold text-2xl text-stone-950 uppercase ${montserrat.className}`}
                >{`${data.preparationMinutes ?? "?"} `}</span>
                min
              </p>
            </div>
          </div>
          <div className="flex items-end gap-1">
            <Image
              className="w-[16px] mb-1.5"
              src={"/time-quarter-to.png"}
              alt={data.title}
              width={1920}
              height={1080}
            />
            <div>
              <p className={`text-xs font-bold`}>COOK TIME</p>
              <p className="text-stone-600">
                <span
                  className={`font-bold text-2xl text-stone-950 uppercase ${montserrat.className}`}
                >{`${data.cookingMinutes ?? "?"} `}</span>
                min
              </p>
            </div>
          </div>
          <div className="flex items-end gap-1">
            <Image
              className="w-[16px] mb-1.5"
              src={"/time-quarter-to.png"}
              alt={data.title}
              width={1920}
              height={1080}
            />
            <div>
              <p className={`text-xs font-bold`}>READY TIME</p>
              <p className="text-stone-600">
                <span
                  className={`font-bold text-2xl text-stone-950 uppercase ${montserrat.className}`}
                >{`${data.readyInMinutes ?? 0} `}</span>
                min
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 border-t-2 border-t-stone-300">
          <h1 className="mt-4 font-extrabold text-[42px] leading-tight text-stone-800">
            {data.title}
          </h1>

          <div className="flex items-center gap-1">
            <Image
              className={`w-[16px] ${montserrat.className}`}
              src={"/social-network.png"}
              alt={data.title}
              width={1920}
              height={1080}
            />
            <p className="flex items-center text-emerald-600">
              {data.aggregateLikes} people like this
            </p>
          </div>

          <p
            className={`mt-4 ${montserrat.className} ${
              seeMoreDescription ? "line-clamp-none" : "line-clamp-5"
            }`}
          >
            {cleanSummary}
          </p>
          <button
            className={`font-bold text-sm ${montserrat.className}`}
            onClick={() => handleSeeMoreDescription()}
          >
            {seeMoreDescription ? "See Less" : "See More..."}
          </button>
        </div>

        <div className="mt-5">
          <ul className="flex flex-wrap gap-4">
            {data.diets.map((diet) => (
              <li key={diet}>
                <p className={ `px-5 py-2 rounded-4xl text-sm bg-slate-200 text-stone-600 font-bold ${montserrat.className}`}>{diet}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={`mt-10 font-extrabold text-3xl ${montserrat.className}`}>
          <p>Ingredients</p>

          <div>
           <ul>
             {/* {data.extendedIngredients.map((ing) => (
              <li key={ing.}>

              </li>
            ))} */}
           </ul>
          </div>
        </div>
      </div>
    );
  }

  return content;
}
