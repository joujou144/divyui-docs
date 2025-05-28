import { components } from "@/utils";
import Link from "next/link";

export const ComponentBoxGrid = ({
  featured = 0,
  showFeaturedOnly = false,
}) => {
  let list = showFeaturedOnly
    ? components.filter((c) => c.featured)
    : components;

  if (featured >= 0) list = list.slice(0, featured);
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {list.map((item) => (
        <Link
          key={item.id}
          href={`/docs/components/${item.name}`}
          className="component-list-box"
        >
          <p className="text-slate-600">{item.name}</p>
          icon
        </Link>
      ))}
    </div>
  );
};
