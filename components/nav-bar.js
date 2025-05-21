import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full bg-red-100 px-6">
      <div className="bg-red-200 flex justify-between items-center py-4">
        {/* Left nav */}
        <div className="flex gap-4">
          <Link href="./">Logo</Link>
          {/* <Link>Components</Link> */}
          <p>Components</p>
        </div>

        {/* Right nav */}
        <div className="flex gap-4">
          <p>Docs</p>
          <p>Installation</p>
        </div>
      </div>
    </nav>
  );
};
