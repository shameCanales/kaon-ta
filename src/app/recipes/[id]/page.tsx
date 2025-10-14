"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useGetRecipeById } from "@/lib/hooks/useGetRecipeById";
import { montserrat } from "@/lib/fonts";
import { useState } from "react";
import { favouritesActions } from "@/lib/store/favouritesSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store/store";

export default function RecipeDetails() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = params;
  const { data, isLoading, isError, error } = useGetRecipeById(Number(id));
  const [seeMoreDescription, setSeeMoreDescription] = useState(false);

  const handleSeeMoreDescription = () => {
    setSeeMoreDescription(!seeMoreDescription);
  };

  const handleAddToFavourites = () => {
    dispatch(favouritesActions.addToFavourites({id}));
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
        <p>${error.message}</p>
      </div>
    );
  }

  if (data) {
    const cleanSummary = data.summary.replace(/<[^>]*>/g, "");

    content = (
      <div className="px-4">
        <Image
          className="rounded-b-4xl  h-[391px] "
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

          <div className="flex justify-between mt-5">
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

            <button
              onClick={() => handleAddToFavourites()}
              className="text-stone-100 rounded-3xl px-4 py-2 bg-emerald-600"
            >
              Add To Favourites
            </button>
          </div>

          <p
            className={`mt-6 ${montserrat.className} ${
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
                <p
                  className={`px-5 py-2 rounded-4xl text-sm bg-slate-200 text-stone-600 font-bold ${montserrat.className}`}
                >
                  {diet}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p
            className={`mt-10 font-extrabold text-3xl ${montserrat.className}`}
          >
            Ingredients
          </p>

          <div className="mt-5">
            <ul className="grid gap-2">
              {data.extendedIngredients.map((ing) => (
                <li key={ing.id}>
                  {/* <div>
                    <Image src={ing.image} alt={ing.name} width={500} height={500} />
                  </div> */}
                  <div
                    className={`p-4 px-8 rounded-2xl bg-gray-300 ${montserrat.className}`}
                  >
                    <p className="font-bold  text-stone-800">
                      {ing.originalName}
                    </p>
                    <p className="text-sm ">
                      {ing.measures.us.amount} - {ing.measures.us.unitShort}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`mt-10 ${montserrat.className}`}>
          <p className={` text-3xl font-extrabold `}>Recipe Steps</p>
          <p className=" py-4 text-lg text-stone-600 font-bold">
            Steps: {`${data.analyzedInstructions[0]?.steps?.length || 0}`}
          </p>

          <ul className="mt-5 grid gap-4">
            {data.analyzedInstructions[0]?.steps?.map((step) => (
              <li
                className="rounded-lg bg-emerald-600 text-stone-50 px-4 py-6"
                key={step.number}
              >
                <p className="text-2xl font-bold">Step {`${step.number}`}</p>
                <p className="text-md mt-4">{step.step}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {step.ingredients?.map((ing) => (
                    <li className="" key={ing.name}>
                      <p className="px-4 py-2 rounded-4xl bg-slate-50 text-stone-900 font-bold text-sm">{`${ing.name}`}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return content;
}
