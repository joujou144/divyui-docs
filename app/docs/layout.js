import { Sidebar } from '@/components/sidebar'

export default function DocsLayout({ children }) {
    return (
        <div className="flex min-h-screen w-full">
            {/* Sidebar */}
            <aside className="hidden w-56 py-6 pr-6 lg:block">
                <Sidebar />
            </aside>

            {/* Main Content */}
            <div className="min-h-screen flex-1 py-6 lg:px-6">
                {children}
                <div className="w-full text-red-400">
                    pagination at the bottom
                </div>
            </div>
        </div>
    )
}
