"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { EnrollNowModal } from "@/components/EnrollNowModal";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const mainNavLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/schedule", label: "Schedule" },
    { href: "/coaches", label: "Coaches" },
    { href: "/achievements", label: "Achievements" },
    { href: "/contact", label: "Contact" },
  ];

  const mobileNavLinks = mainNavLinks;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <Image key="logo-header" src="/animations/images/chess.png?v=2" alt="VR Chess Academy Logo" width={56} height={56} />
          <span className="text-2xl font-bold font-headline text-primary">
            VR CHESS ACADEMY
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-md font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-foreground/70"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <EnrollNowModal>
            <Button>Enroll Now</Button>
          </EnrollNowModal>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                   <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                    <Image key="logo-mobile" src="/animations/images/chess.png?v=2" alt="VR Chess Academy Logo" width={40} height={40} />
                    <span className="text-xl font-bold font-headline text-primary">
                      VR CHESS ACADEMY
                    </span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex-grow flex flex-col items-center justify-center gap-8 text-center p-4">
                  {mobileNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "text-2xl font-medium transition-colors hover:text-primary",
                        pathname === link.href ? "text-primary" : "text-foreground/70"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <div className="p-4 border-t">
                    <EnrollNowModal>
                        <Button className="w-full" size="lg">Enroll Now</Button>
                    </EnrollNowModal>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
