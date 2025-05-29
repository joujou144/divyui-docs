'use client'

import { cn } from '@/utils'
import { useThemeColorChange } from '@/utils/hooks'
import Link from 'next/link'
import { MobileNav, NavLinks } from '../nav'

export const Header = () => {
    const { pageClass } = useThemeColorChange()

    return (
        <nav role="navigation" className={cn(pageClass)}>
            <div className="mx-6 flex items-center justify-between py-2">
                {/* Home */}
                <div
                    className={cn(
                        'nav-logo flex items-center gap-4',
                        pageClass
                    )}
                >
                    <Link href="/" className="monoton text-xl">
                        Divy
                    </Link>

                    <span
                        className={cn('nunito-light version-pill', pageClass)}
                    >
                        v.3.0
                    </span>
                </div>

                {/* Menu */}
                <NavLinks />

                {/* Mobile nav */}
                <MobileNav />
            </div>
        </nav>
    )
}
