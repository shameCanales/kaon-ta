"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useGetRecipeById } from "@/lib/hooks/useGetRecipeById";
import { montserrat } from "@/lib/fonts";

export default function RecipeDetails() {
  const params = useParams();
  const { id } = params;
  const { data, isLoading, isError, error } = useGetRecipeById(Number(id));

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
    content = (
      <div className="px-4">
        <Image
          className="rounded-b-4xl h-[391px] "
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
                >{`${data.preparationMinutes ?? 0} `}</span>
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
                >{`${data.cookingMinutes ?? 0} `}</span>
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
            <p className="flex items-center">
              {data.aggregateLikes} people like this
            </p>
          </div>
        </div>

        <div className="">
          <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
          <div className="mt-4 space-y-2">
            <p>
              <strong>Ready in:</strong> {data.readyInMinutes} minutes
            </p>
            <p>
              <strong>Servings:</strong> {data.servings}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return content;
}
