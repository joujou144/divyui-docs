import { cn, components } from "@/utils";
import Link from "next/link";

export const ComponentListing = ({
  featured = 0,
  showFeaturedOnly = false,
  className,
}) => {
  let list = showFeaturedOnly
    ? components.filter((c) => c.featured)
    : components;

  if (featured >= 0) list = list.slice(0, featured);

  return (
    <section className={cn("", className)}>
      <div className="p-4 grid grid-cols-2 gap-4 my-1 md:grid-cols-4 xl:grid-cols-6">
        {list.map((item) => (
          <Link
            key={item.id}
            href={item.name}
            className="relative inline-flex flex-col px-5 py-6  font-medium capitalize text-drip-black text-2xl shadow-inner shadow-drip-black/30 rounded-lg hover:shadow-drip-black/50"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};
