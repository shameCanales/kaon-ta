import type { ReactNode } from "react";


export default function RecipeLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      {children}
    </section>
  );
}
