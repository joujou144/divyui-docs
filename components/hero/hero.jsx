import GearArt from "@/components/ascii/shapes";
export const Hero = () => {
  return (
    <section className=" md:w-[50%] md:mx-auto flex flex-col sm:items-center sm:justify-center">
      <DivyArtASCIISVG />

      <h1 className="monoton-logo">Divy UI</h1>

      <p className="p-4 text-[#8989be]">
        Minimalist UI components to elevate your frontend workflow. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Suscipit, officia quasi?
        Aliquam quidem, alias maxime natus quibusdam illo obcaecati nisi aut,
        distinctio, id accusantium eaque quod totam ratione! Voluptates
        distinctio, eos ullam corrupti asperiores cumque beatae saepe,
        doloremque provident quaerat dolor porro similique nostrum nihil esse
        facere facilis, unde perferendis!
      </p>
    </section>
  );
};

const DivyArtASCIISVG = () => (
  <svg
    width="100%"
    viewBox="0 0 1330 600"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
  >
    <foreignObject width="100%" height="100%">
      <pre
        xmlns="http://www.w3.org/1999/xhtml"
        className="text-art font-extrabold animate-pulse duration-300"
      >
        {GearArt}
      </pre>
    </foreignObject>
  </svg>
);
