import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-20 border-b border-gray flex items-center bg-white">
      <div className="wrapper grid grid-cols-3 items-center gap-20">
        {/* LEFT NAV */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/" className="link-item">
                Link1
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link2
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link3
              </Link>
            </li>
          </ul>
        </nav>
        {/* MID NAV */}
        <nav>
          <ul className="flex justify-center">
            <li>
              <Link
                href="/"
                className="lowercase text-3xl font-semibold text-pink"
              >
                Sparkle Mart
              </Link>
            </li>
          </ul>
        </nav>
        {/* RIGHT NAV */}
        <nav>
          <ul className="flex gap-5 justify-end">
            <li>
              <Link href="/" className="link-item">
                Link4
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link5
              </Link>
            </li>
            <li>
              <Link href="/user/signin">Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
