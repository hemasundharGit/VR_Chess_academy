import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

const coaches = [
  {
    name: "P.satya sai vardhan",
    bio: "With over 5 years of coaching experience, he boasts a decorated career as a player. He represented Andhra Pradesh in the National Men's Team Chess Championship for two consecutive years (2020 & 2021) and has secured championships in various international rating tournaments, alongside numerous state and district titles.",
    image: "/animations/images/Coach.jpg",
    accolades: ["National Team Player (Andhra Pradesh)", "International & State Level Champion"],
  },
  {
    name: "Y. Mahesh",
    bio: "With over 10 years of coaching experience, Y. Mahesh is a FIDE International Player. Under his guidance, many students have achieved international FIDE ratings. A special mention goes to his student, Y. Premi Rakshitha, who became the U-11 state champion and was selected for nationals under his guidance.",
    image: "/animations/images/mahesh.jpg",
    accolades: ["10+ Years Coaching Experience", "FIDE International Player", "Coached U-11 State Champion"],
  },
];

export default function CoachesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Meet Our Coaches</h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Experienced, passionate, and dedicated to helping you achieve your chess goals.
          </p>
        </div>

        <div className="space-y-12">
          {coaches.map((coach, index) => (
            <Card key={coach.name} className="overflow-hidden border-primary/40 bg-card">
              <div className={`grid grid-cols-1 md:grid-cols-3 items-center gap-8 ${index % 2 !== 0 ? 'md:grid-flow-row-dense' : ''}`}>
                <div className={`relative h-64 md:h-full w-full ${index % 2 !== 0 ? 'md:col-start-3' : ''}`}>
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="font-headline text-3xl text-primary">{coach.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-foreground/90 mb-6">{coach.bio}</p>
                    <div className="space-y-3">
                      {coach.accolades.map((accolade) => (
                        <div key={accolade} className="flex items-center gap-3">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                          <span className="font-semibold">{accolade}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
