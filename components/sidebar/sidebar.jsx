'use client'
import { cn, sortedComponents } from '@/utils'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronLeftIcon } from '../svg'

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleOpen = () => setIsOpen(!isOpen)

    return (
        <div>
            <button
                onClick={toggleOpen}
                className="text-md mb-4 flex w-full items-center gap-3 tracking-wide capitalize transition hover:opacity-80"
            >
                Components
                <ChevronLeftIcon
                    className={cn(
                        'h-4 w-4 transition-transform duration-300',
                        isOpen && '-rotate-90'
                    )}
                />
            </button>

            {/* Component List */}
            {isOpen && (
                <ul className="space-y-3 pl-2 text-sm">
                    {sortedComponents.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={`/docs/components/${item.name}`}
                                className="group flex items-center gap-4"
                            >
                                <span className="bg-lilac-100 group-hover:bg-berry-400 h-1 w-1 rounded-full transition-all duration-200" />
                                <span className="capitalize">{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
