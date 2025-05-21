import BlockText from "@/components/ascii/block";
import Tree from "@/components/ascii/tree";
export const Hero = () => {
  return (
    <section className="h-full">
      <div>
        <p>hero section here</p>
      </div>

      <div className="">
        <pre className="w-1/2">{Tree}</pre>
        <pre className="w-1/2">{BlockText}</pre>
      </div>
    </section>
  );
};
