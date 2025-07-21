import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/coaches', label: 'Coaches' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/contact', label: 'Contact' },
  ];

  const coachEmail = 'vrchessacademy@gmail.com';

  return (
    <footer id="page-footer" className="bg-card border-t border-border">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image key="logo-footer" src="/animations/images/chess.png?v=2" alt="VR Chess Academy Logo" width={56} height={56} />
              <span className="text-2xl font-bold font-headline text-primary">
                VR CHESS ACADEMY
              </span>
            </Link>
            <p className="text-foreground/70">
              Where Focus Meets Finesse.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground/80">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+919581581595" className="hover:text-primary transition-colors">
                  +91 95815 81595
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${coachEmail}`} className="hover:text-primary transition-colors">
                  {coachEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-foreground/60 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-center sm:text-left">&copy; 2025 VR Chess Academy. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Designed By Hema Sundharam Kolla</p>
        </div>
      </div>
    </footer>
  );
}
