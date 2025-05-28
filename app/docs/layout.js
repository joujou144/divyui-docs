// app/docs/layout.js

export default function DocsLayout({ children }) {
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar - only visible on large screens */}
      <aside className="hidden lg:block w-64 border-r border-slate-200 px-4 py-6">
        Sidebar
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:px-6 py-6 min-h-screen">
        {children}
        <div className=" w-full text-red-400">pagination at the bottom</div>
      </div>
    </div>
  );
}
