import type { ReactNode } from "react";

export default function RecipeLayout({ children }: { children: ReactNode }) {
  return <section>
    <h1>This is the hero search</h1>
    {children}
    </section>;
}
