import { GithubIcon, LinkedinIcon, NpmIcon } from "@/components/svg";

export const navMenu = [
  { id: 1, name: "docs", href: "/docs" },
  { id: 2, name: "installation", href: "/docs/installation" },
  { id: 3, name: "components", href: "/docs/components/accordion" },
];

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

export const sortedComponents = components.sort((a, b) =>
  a.name.localeCompare(b.name)
);

export const footerLinks = [
  {
    id: 1,
    title: "github",
    link: "https://github.com/joujou144/divy-ui",
    icon: <GithubIcon />,
  },
  {
    id: 2,
    title: "linkedin",
    link: "https://www.linkedin.com/in/aznimrahman",
    icon: <LinkedinIcon />,
  },
  {
    id: 3,
    title: "npm",
    link: "https://www.npmjs.com/package/divy-ui",
    icon: <NpmIcon />,
  },
];
