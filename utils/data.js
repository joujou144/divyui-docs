import { GithubIcon, LinkedinIcon, NpmIcon } from "@/components/svg";

export const components = [
  { id: 1, name: "button", icon: "", featured: true },
  { id: 2, name: "card", icon: "", featured: true },
  { id: 3, name: "progress", icon: "", featured: true },
  { id: 4, name: "link", icon: "", featured: false },
  { id: 5, name: "divider", icon: "", featured: false },
  { id: 6, name: "image", icon: "", featured: true },
  { id: 7, name: "input", icon: "", featured: false },
  { id: 8, name: "tooltip", icon: "", featured: false },
  { id: 9, name: "badge", icon: "", featured: false },
  { id: 10, name: "modal", icon: "", featured: true },
  { id: 11, name: "accordion", icon: "", featured: true },
  { id: 12, name: "spinner", icon: "", featured: false },
];

export const footerLinks = [
  {
    id: 1,
    title: "github",
    link: "https://github.com/joujou144/divy-ui",
    icon: (
      <GithubIcon className="text-lilac-300 transition-colors hover:text-berry-400 duration-200" />
    ),
  },
  {
    id: 2,
    title: "linkedin",
    link: "https://www.linkedin.com/in/aznimrahman",
    icon: (
      <LinkedinIcon className="text-lilac-300 transition-colors hover:text-berry-400 duration-200" />
    ),
  },
  {
    id: 3,
    title: "npm",
    link: "https://www.npmjs.com/package/divy-ui",
    icon: (
      <NpmIcon className="text-lilac-300 transition-colors hover:text-berry-400 duration-200" />
    ),
  },
];
