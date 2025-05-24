import { Hero } from "@/components/hero";
import { ComponentListing } from "@/components/listing";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-10">
      <Hero />
      <ComponentListing featured={6} showFeaturedOnly className="py-8" />
    </div>
  );
}
