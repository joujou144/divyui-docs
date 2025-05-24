import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Hero />
      {/* <ComponentListing featured={6} showFeaturedOnly className="my-14" /> */}
    </div>
  );
}
