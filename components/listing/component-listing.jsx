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
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
        {list.map((item) => (
          <Link
            key={item.id}
            href={item.name}
            className="relative transition-all flex flex-col px-5 py-6 capitalize text-2xl shadow-md shadow-black/50 rounded-lg hover:shadow-xl hover:shadow-black/50"
          >
            <p className="text-slate-600">{item.name}</p>
            icon
          </Link>
        ))}
      </div>
    </section>
  );
};
