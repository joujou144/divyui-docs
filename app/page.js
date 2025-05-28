import { Hero } from "@/components/hero";
import { ComponentListing } from "@/components/listing";

export default function Home() {
  return (
    <>
      <Hero />
      <ComponentListing featured={6} showFeaturedOnly className="py-8 mt-10" />
    </>
  );
}
