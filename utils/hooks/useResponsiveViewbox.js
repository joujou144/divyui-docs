"use client";

import { useEffect, useRef, useState } from "react";

export function useResponsiveViewbox() {
  const elRef = useRef(null);
  const [viewBox, setViewbox] = useState("0 0 1320 570");

  useEffect(() => {
    const element = elRef.current;

    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;

      if (width < 758) {
        setViewbox("0 0 1320 570");
      } else if (width < 1024) {
        setViewbox("0 0 1320 480");
      } else {
        setViewbox("0 0 1320 400");
      }
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [elRef, viewBox]);
  return { elRef, viewBox };
}
