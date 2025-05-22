import { DivyArtASCIISVG } from "@/components/svg/divy-ascii-art";

export const Hero = () => {
  return (
    <section className="md:mx-auto flex flex-col sm:items-center sm:justify-center">
      <DivyArtASCIISVG />

      <div className="mx-3 text-right md:text-center">
        <h1 className="monoton-logo text-[2.5rem] md:text-[4.5rem]">Divy UI</h1>

        <p className="text-white font-semibold leading-7 md:text-xl mt-2">
          Minimalist UI components to elevate your frontend workflow for
          building accessible web applications.
        </p>
      </div>
    </section>
  );
};
