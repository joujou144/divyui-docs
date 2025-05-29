import { footerLinks } from '@/utils'

export const Footer = () => {
    return (
        <footer className="mt-auto flex w-full flex-col items-center justify-center gap-3 border-t border-slate-200 p-5">
            <p className="text-sm text-indigo-950">
                © 2025 DivyUI Inc. All rights reserved.
            </p>
            <ul className="hidden items-center gap-6 lg:flex">
                {footerLinks.map((item) => (
                    <li key={item.id}>
                        <a
                            rel="noreferrer noopener"
                            target="_blank"
                            href={item.link}
                            className="hover:text-berry-400 text-indigo-950 transition-colors duration-200"
                        >
                            {item.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}
