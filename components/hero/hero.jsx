"use client";

import { CheckIcon, CopyIcon, DivyArtASCIISVG } from "@/components/svg";
import { cn, useCopyToClipboard, useResponsiveViewbox } from "@/utils";
import { useRef } from "react";

export const Hero = ({ className }) => {
  const textRef = useRef(null);
  const { elRef, viewBox } = useResponsiveViewbox();
  const { handleCopy, copied } = useCopyToClipboard();

  return (
    <section className={cn("relative", className)}>
      <DivyArtASCIISVG ref={elRef} viewBox={viewBox} />
      <div className="hero-text text-violet-50">
        <h1 className="monoton hero-divy">Divy UI</h1>

        <p className="nunito-semibold text-heading text-sm xs:text-xl">
          <span className="text-indigo-950">Minimalist UI</span> components to
          elevate your <span className="text-indigo-950">frontend </span>
          workflow for building{" "}
          <span className="text-indigo-950">accessible</span> web applications.
        </p>

        <div className="copy-cta">
          <pre ref={textRef} className="copy-text" data-copy="npm i divy-ui">
            <span className="select-none" aria-hidden="true">
              $
            </span>
            npm i divy-ui
          </pre>
          <button
            type="button"
            tabIndex={0}
            aria-label="Copy to clipboard"
            onClick={() => handleCopy(textRef.current.dataset.copy)}
            className="cursor-pointer"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>
      </div>
    </section>
  );
};
