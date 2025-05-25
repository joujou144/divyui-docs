import { cn } from "@/utils";
import { ComponentBoxGrid } from "./component-box-grid";

export const ComponentListing = ({ className }) => {
  return (
    <section className={cn("flex flex-col gap-6", className)}>
      <div>
        <h2 className="nunito-semibold text-slate-700 text-heading text-[1.5rem] leading-8">
          Clean design for <span className="text-white">beautiful</span>{" "}
          interfaces
        </h2>
        <p className="mt-2 text-sm lg:text-md text-slate-600">
          DivyUI uses Tailwind variants to simplify slot customization and
          prevent Tailwind class conflicts.
        </p>
      </div>

      <ComponentBoxGrid featured={6} showFeaturedOnly />
    </section>
  );
};
