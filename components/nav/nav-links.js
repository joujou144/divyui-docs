import { cn, navMenu, useThemeColorChange } from '@/utils'
import Link from 'next/link'

export const NavLinks = () => {
    const { pathname, pageClass } = useThemeColorChange()

    return (
        <ul
            className={cn(
                'nunito-regular hidden gap-4 capitalize lg:flex',
                pageClass
            )}
        >
            {navMenu.map(({ id, href, name }) => {
                const isActive =
                    pathname === href ||
                    (name === 'components' &&
                        pathname.startsWith('/docs/components'))
                return (
                    <li key={id}>
                        <Link
                            href={href}
                            className={cn('transition-link px-3 py-1', {
                                active: isActive,
                            })}
                        >
                            {name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
