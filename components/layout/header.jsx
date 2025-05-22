import Link from "next/link";

export const Header = () => {
  return (
    <nav role="navigation" className="w-full py-4 shadow-lg text-violet-50">
      <div className="flex justify-between items-center py-2 mx-6">
        {/* Left nav */}
        <div>
          <Link href="/" className="monoton-logo text-lg">
            Divy UI
          </Link>
          {/* <Link>Components</Link> */}
          <span className="ml-6">v.3.0</span>
        </div>

        {/* Right nav */}
        <div className="hidden lg:flex gap-6">
          <p>Components</p>
          <p>Docs</p>
          <p>Installation</p>
        </div>
      </div>
    </nav>
  );
};
