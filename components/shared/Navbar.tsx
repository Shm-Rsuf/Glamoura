import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="">
        {/* LEFT NAV */}
        <nav>
          <ul>
            <li>
              <Link href="/">Link 1</Link>
            </li>
            <li>
              <Link href="/">Link 2</Link>
            </li>
            <li>
              <Link href="/">Link 3</Link>
            </li>
          </ul>
        </nav>
        {/* MID NAV */}
        <nav>
          <ul>
            <li>
              <Link href="/">Sparkle Mart</Link>
            </li>
          </ul>
        </nav>
        {/* RIGHT NAV */}
        <nav>
          <ul>
            <li>
              <Link href="/">Link 4</Link>
            </li>
            <li>
              <Link href="/">Link 5</Link>
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
