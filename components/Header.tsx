import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="border-b border-slate-100 dark:border-slate-700 py-4 mb-6 bg-transparent">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">Iqbal Lazuardi</h1>
          <nav className="hidden md:flex items-center gap-2 text-sm muted">
            <Link href="/" className="px-3 py-1 hover:underline">
              Home
            </Link>
            <Link href="/about" className="px-3 py-1 hover:underline">
              About
            </Link>
            <Link href="/projects" className="px-3 py-1 hover:underline">
              Projects
            </Link>
            <Link href="/contact" className="px-3 py-1 hover:underline">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
