"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { EnrollNowModal } from '@/components/EnrollNowModal';

const RotatingChessPiece = dynamic(
  () => import('@/components/RotatingChessPiece').then((mod) => mod.RotatingChessPiece),
  { 
    ssr: false,
    loading: () => <div className="w-64 h-64 md:w-80 md:h-80 bg-muted rounded-full" />
  }
);

export function HeroSection() {
  return (
    <section className="w-full bg-card py-20 md:py-32">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
           <RotatingChessPiece />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight">
            Master Chess with Expert Coaching
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            Unlock your potential with personalized training programs at Visionary Rooks Chess Academy. From beginner fundamentals to advanced strategies, we pave your path to mastery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="font-bold">
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <EnrollNowModal>
              <Button size="lg" variant="outline" className="font-bold">
                Enroll Now
              </Button>
            </EnrollNowModal>
          </div>
        </div>
      </div>
    </section>
  );
}
