import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  return (
    <nav className="w-full flex items-start justify-between py-5">
      <Link href="/" className="font-bold text-3xl">
        Marshal<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
