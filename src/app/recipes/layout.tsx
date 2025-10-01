import type { ReactNode } from "react";
import RecipeSearch from "@/components/sections/RecipeSearch";

export default function RecipeLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <RecipeSearch />
      {children}
    </section>
  );
}
