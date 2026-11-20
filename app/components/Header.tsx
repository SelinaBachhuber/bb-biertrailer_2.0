'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import wheatLogo from '../../images/weizen.png';

const links = [
  { href: '/', label: 'Startseite' },
  { href: '/about', label: 'Über uns' },
  { href: '/products', label: 'Ausschankwagen' },
  { href: '/services', label: 'Leistungen' },
  { href: '/gallery', label: 'Galerie' },
];

export default function Header() {
  const pathname = usePathname();
  const isCurrentPage = (href: string) => pathname === href;

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="BB's Biertrailer – Startseite">
          <Image className="header-logo" src={wheatLogo} alt="" />
          <span>BB&apos;s Biertrailer</span>
        </Link>
        <nav className="main-nav" aria-label="Hauptnavigation">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              aria-current={isCurrentPage(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="nav-contact"
            href="/contact"
            aria-current={isCurrentPage('/contact') ? 'page' : undefined}
          >
            Anfrage stellen
          </Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Navigation öffnen">Menü</summary>
          <nav className="mobile-nav-links" aria-label="Mobile Navigation">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                aria-current={isCurrentPage(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" aria-current={isCurrentPage('/contact') ? 'page' : undefined}>
              Anfrage stellen
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
