import Link from "next/link";

export const Header = () => {
  return (
    <nav className="w-full bg-red-100 px-6 py-4">
      <div className="bg-red-200 flex justify-between items-center py-2">
        {/* Left nav */}
        <div className="flex gap-4">
          <Link href="/">Logo</Link>
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
