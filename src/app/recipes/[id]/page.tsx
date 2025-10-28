"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useGetRecipeById } from "@/lib/hooks/useGetRecipeById";
import ToggleFavourite from "@/components/ui/ToggleFavourite";
import { montserrat } from "@/lib/fonts";
import { Ingredient, InstructionStep } from "@/lib/types/Recipe";

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

            <ToggleFavourite id={data.id} />
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
            {data.diets.map((diet: string) => (
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
              {data.extendedIngredients.map((ing: Ingredient) => (
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

          <div className="mt-4 flex gap-3 bg-gray-300 py-3 px-4 rounded-3xl items-center text-stone-600 font-medium ">
            <p className={`text-lg  border-r-1 pr-3 border-r-gray-400`}>
              Steps: {`${data.analyzedInstructions[0]?.steps?.length || 0}`}
            </p>

            <div className="flex items-center gap-2">
              <Image
                className="w-[16px] "
                src={"/duration-alt.png"}
                alt={data.title}
                width={1920}
                height={1080}
              />
              <p>
                {`${data.readyInMinutes || "?"} min${
                  data.readyInminutes > 0 ? "s" : ""
                }`}{" "}
              </p>
            </div>
          </div>

          <ul className="mt-5 grid gap-4">
            {data.analyzedInstructions[0]?.steps?.map(
              (step: InstructionStep) => (
                <li
                  className="rounded-lg bg-indigo-500 text-stone-50 px-4 py-6"
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
              )
            )}
          </ul>
        </div>
      </div>
    );
  }

  return content;
}
