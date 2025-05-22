import MultiGeo from "@/components/ascii/shapes";

export const DivyArtASCIISVG = () => (
  <svg
    width="100%"
    viewBox="0 0 1320 570"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
  >
    <foreignObject
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/1999/xhtml"
    >
      <pre
        className="text-art font-extrabold animate-pulse duration-300"
        aria-label="Pulsating ASCII art depicting multi shapes"
      >
        {MultiGeo}
      </pre>
    </foreignObject>
  </svg>
);
