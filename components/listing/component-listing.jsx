import { cn } from "@/utils";
import { ComponentBoxGrid } from "./component-box-grid";

export const ComponentListing = ({ className }) => {
  return (
    <section className={cn("flex flex-col gap-6 md:px-4", className)}>
      <div className="flex flex-col items-start">
        <h2 className="nunito-semibold text-heading component-title">
          Clean design for beautiful interfaces
        </h2>
        <p className="component-subtitle">
          DivyUI uses Tailwind variants to simplify slot customization and
          prevent Tailwind class conflicts.
        </p>
        <p className="px-3 py-1 mt-4 bg-berry-400/70 text-violet-50 rounded-full animate-slow-bounce text-sm lg:text-md">
          Featured components added weekly
        </p>
      </div>

      <ComponentBoxGrid featured={6} showFeaturedOnly />
    </section>
  );
};
