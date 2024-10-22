import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5 max-w-2xl mx-auto">
      <Link href="/" className="font-bold text-3xl">
        Marshal<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
