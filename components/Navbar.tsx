import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link href="/" className="logo">
          <Image
            src="/icons/logo.png"
            alt="DevEvents Logo"
            width={24}
            height={24}
          />

          <p>DevEvents</p>
        </Link>

        <ul>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/create-events">Create events</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
