import { footerLinks } from "@/utils";

export const Footer = () => {
  return (
    <footer className="mt-auto w-full flex items-center justify-center lg:justify-between p-5 border-t border-neutral-300">
      <p className="text-sm text-lilac-300">
        © 2025 DivyUI Inc. All rights reserved.
      </p>
      <ul className="hidden lg:flex items-center gap-6">
        {footerLinks.map((item) => (
          <li key={item.id}>
            <a rel="noreferrer-noopener" target="_blank" href={item.link}>
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
