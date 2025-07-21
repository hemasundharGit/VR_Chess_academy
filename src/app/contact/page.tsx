import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./_components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get In Touch</h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us via phone, email, or the contact form below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-headline font-semibold text-primary mb-6">Contact Information</h2>
            <div className="space-y-6">
              <Card className="flex items-center p-4 bg-card border-primary/40">
                <Phone className="h-8 w-8 text-primary mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a href="tel:+919581581595" className="text-foreground/80 hover:text-primary">
                    +91 95815 81595
                  </a>
                </div>
              </Card>
              <Card className="flex items-center p-4 bg-card border-primary/40">
                <Mail className="h-8 w-8 text-primary mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                   <a href="mailto:vrchessacademy@gmail.com" className="text-foreground/80 hover:text-primary">
                    vrchessacademy@gmail.com
                  </a>
                </div>
              </Card>
              <Card className="flex items-center p-4 bg-card border-primary/40">
                <MapPin className="h-8 w-8 text-primary mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-foreground/80">Online & In-person (By Appointment)</p>
                </div>
              </Card>
            </div>
          </div>
          <div>
             <Card className="border-primary/40 bg-card">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                    <CardDescription>We will get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
