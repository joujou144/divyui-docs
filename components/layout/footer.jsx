import { footerLinks } from "@/utils";

export const Footer = () => {
  return (
    <footer className="mt-auto w-full flex flex-col items-center justify-center gap-3 p-5 border-t border-lilac-100">
      <p className="text-sm text-indigo-950">
        © 2025 DivyUI Inc. All rights reserved.
      </p>
      <ul className="hidden lg:flex items-center gap-6">
        {footerLinks.map((item) => (
          <li key={item.id}>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={item.link}
              className="text-indigo-950 transition-colors hover:text-berry-400 duration-200"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
