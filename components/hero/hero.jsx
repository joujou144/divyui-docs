"use client";

import { CheckIcon, CopyIcon, DivyArtASCIISVG } from "@/components/svg";
import { cn, copyToClipboard, useResponsiveViewbox } from "@/utils";
import { useRef, useState } from "react";

export const Hero = ({ className }) => {
  const textRef = useRef(null);
  const timeoutRef = useRef(null);
  const [copyText, setCopyText] = useState(false);
  const { elRef, viewBox } = useResponsiveViewbox();

  const handleCopyToClipboard = async () => {
    const success = await copyToClipboard(textRef);

    if (success) {
      setCopyText(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCopyText(false);
      }, 1500);
    }
  };

  return (
    <section className={cn("relative", className)}>
      <DivyArtASCIISVG ref={elRef} viewBox={viewBox} />
      <div className="hero-text text-violet-50">
        <h1 className="monoton hero-divy">Divy UI</h1>

        <p className="nunito-semibold hero-sub">
          Minimalist UI components to elevate your frontend workflow for
          building accessible web applications.
        </p>

        <div className="copy-cta">
          <span className="select-none" aria-hidden="true">
            $
          </span>
          <pre ref={textRef} className="copy-text">
            npm i divy-ui
          </pre>
          <button
            type="button"
            tabIndex={0}
            aria-label="Copy to clipboard"
            onClick={handleCopyToClipboard}
            className="cursor-pointer"
          >
            {copyText ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>
      </div>
    </section>
  );
};
