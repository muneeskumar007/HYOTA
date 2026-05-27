import { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  // { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#team', label: 'Team' },
  { href: '#download', label: 'Download' },
];

export default function Navbar({ onDownloadClick }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.slice(1));
      let current = '#home';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) current = '#' + id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    if (href === '#download') { onDownloadClick(); return; }
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm shadow-slate-200/60 border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-[70px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={e => handleNav(e, '#home')} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-md shadow-blue-500/30 group-hover:scale-110 transition-transform duration-200">
            <Activity className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Hy<span className="text-gradient">oid</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={e => handleNav(e, href)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onDownloadClick}
            className="btn-primary text-xs"
          >
            Download App
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white/95 backdrop-blur-xl border-b border-slate-100`}
      >
        <ul className="px-6 py-4 space-y-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={e => handleNav(e, href)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <button onClick={onDownloadClick} className="btn-primary w-full justify-center">
              Download App
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
