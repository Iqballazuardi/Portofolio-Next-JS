import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <button aria-label="Toggle theme" className="px-2 py-1 rounded border dark:border-slate-700" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
