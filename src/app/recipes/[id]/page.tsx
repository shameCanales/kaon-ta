"use client";

import { useParams } from "next/navigation";

export default function RecipeDetails() {
  const params = useParams();

  const id = params.id;

  return <div>Recipe no. {id} details</div>;
}
