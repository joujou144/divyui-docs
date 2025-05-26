import { cn } from "@/utils";
import { ComponentBoxGrid } from "./component-box-grid";

export const ComponentListing = ({ className }) => {
  return (
    <section className={cn("flex flex-col gap-6 md:px-4", className)}>
      <div>
        <h2 className="nunito-semibold text-heading component-title">
          Clean design for <span className="text-white">beautiful</span>{" "}
          interfaces
        </h2>
        <p className="component-subtitle">
          DivyUI uses Tailwind variants to simplify slot customization and
          prevent Tailwind class conflicts.
        </p>
      </div>

      <ComponentBoxGrid featured={6} showFeaturedOnly />
    </section>
  );
};
