"use client";

import { DivyArtASCIISVG } from "@/components/svg/divy-ascii-art";
import { useResponsiveViewbox } from "@/utils";

export const Hero = () => {
  const { elRef, viewBox } = useResponsiveViewbox();

  return (
    // <section className="md:mx-auto flex flex-col sm:items-center sm:justify-center lg:flex-row">
    //   <DivyArtASCIISVG />

    //   <div className="mx-3 text-right lg:text-left text-white ">
    //     <h1 className="monoton-logo text-[2.5rem] md:text-[4.5rem]">Divy UI</h1>

    //     <p className="font-semibold leading-6 md:text-xl mt-2">
    //       Minimalist UI components to elevate your frontend workflow for
    //       building accessible web applications.
    //     </p>
    //   </div>
    // </section>
    <section className="relative">
      <DivyArtASCIISVG ref={elRef} viewBox={viewBox} />
      <div className="text-white absolute top-[20%] text-center w-full">
        <h1 className="monoton text-xl lg:text-[4rem]">Divy UI</h1>

        <p className="font-semibold leading-5 md:leading-7 text-sm md:text-xl lg:text-[2.5rem] max-w-full mx-auto">
          Minimalist UI components to elevate your frontend workflow for
          building accessible web applications.
        </p>
      </div>
    </section>
  );
};
