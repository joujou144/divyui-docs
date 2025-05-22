import Link from "next/link";

export const Header = () => {
  return (
    <nav
      role="navigation"
      className="w-full px-6 py-4 shadow-lg text-violet-100"
    >
      <div className="flex justify-between items-center py-2">
        {/* Left nav */}
        <div>
          <Link href="/">DivyUI</Link>
          {/* <Link>Components</Link> */}
          <span className="ml-6">v.3.0</span>
        </div>

        {/* Right nav */}
        <div className="flex gap-6">
          <p>Components</p>
          <p>Docs</p>
          <p>Installation</p>
        </div>
      </div>
    </nav>
  );
};
