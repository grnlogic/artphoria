'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Magnet from '@/components/Magnet/Magnet';

const navItems = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/kegiatan', label: 'Kegiatan' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/partnership', label: 'Partnership' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/kontak', label: 'Kontak & FAQ' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E2E0EC] bg-[#FBFBFE]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]">
          <Image
            src="/logo-artphoria.jpg"
            alt="Logo Artphoria"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight text-[#0F1533]">Artphoria</span>
            <span className="text-[11px] text-[#504E72]">Echoes of the Mind</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-7" aria-label="Navigasi Utama">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#58428B] underline underline-offset-8 decoration-2 font-semibold'
                    : 'text-[#504E72] hover:text-[#0F1533]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex md:items-center">
          <Magnet padding={25} magnetStrength={1.5}>
            <Link
              href="/kontak"
              className="inline-flex h-9 items-center justify-center rounded px-4 text-xs font-semibold text-[#FBFBFE] bg-[#58428B] hover:bg-[#483572] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            >
              Hubungi Panitia
            </Link>
          </Magnet>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-[#E2E0EC] text-[#0F1533] hover:bg-[#F6F5FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58428B]"
            aria-expanded={isOpen}
            aria-label="Buka menu navigasi"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.75"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="border-b border-[#E2E0EC] bg-[#FBFBFE] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Navigasi Seluler">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-1 text-sm font-medium ${
                    isActive
                      ? 'text-[#58428B] underline underline-offset-4 decoration-2 font-semibold'
                      : 'text-[#504E72] hover:text-[#0F1533]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/kontak"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-9 w-full items-center justify-center rounded px-4 text-xs font-semibold text-[#FBFBFE] bg-[#58428B] hover:bg-[#483572] transition-colors"
              >
                Hubungi Panitia
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

