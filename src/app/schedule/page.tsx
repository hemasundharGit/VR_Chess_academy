import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge, badgeVariants } from '@/components/ui/badge';
import type { VariantProps } from 'class-variance-authority';

const scheduleData = [
  { level: 'Beginner (Batch A)', day: 'Monday & Wednesday', time: '4:00 PM - 5:00 PM', status: 'Open' },
  { level: 'Beginner (Batch B)', day: 'Tuesday & Thursday', time: '5:00 PM - 6:00 PM', status: 'Full' },
  { level: 'Intermediate (Batch A)', day: 'Monday & Wednesday', time: '6:00 PM - 7:30 PM', status: 'Open' },
  { level: 'Intermediate (Batch B)', day: 'Tuesday & Thursday', time: '6:30 PM - 8:00 PM', status: 'Few Seats Left' },
  { level: 'Advanced (Batch A)', day: 'Friday & Saturday', time: '7:00 PM - 9:00 PM', status: 'Open' },
  { level: 'Weekend All-Levels', day: 'Saturday & Sunday', time: '10:00 AM - 12:00 PM', status: 'Few Seats Left' },
];

const getStatusBadgeVariant = (status: string): VariantProps<typeof badgeVariants>["variant"] => {
  switch (status) {
    case 'Open':
      return 'default';
    case 'Few Seats Left':
      return 'secondary';
    case 'Full':
      return 'destructive';
    default:
      return 'outline';
  }
};

export default function SchedulePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Class Schedule</h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Find the perfect batch that fits your schedule. Enrollment is on a first-come, first-served basis.
          </p>
        </div>

        <Card className="overflow-hidden border-primary/40 bg-card">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="w-[40%] font-headline text-lg">Program Level</TableHead>
                  <TableHead className="font-headline text-lg">Days</TableHead>
                  <TableHead className="font-headline text-lg">Time</TableHead>
                  <TableHead className="text-right font-headline text-lg">Availability</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduleData.map((item) => (
                  <TableRow key={item.level} className="text-md border-border">
                    <TableCell className="font-medium text-primary">{item.level}</TableCell>
                    <TableCell>{item.day}</TableCell>
                    <TableCell>{item.time}</TableCell>
                    <TableCell className="text-right">
                       <Badge variant={getStatusBadgeVariant(item.status)}>
                        {item.status}
                       </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <p className="text-center mt-8 text-foreground/70">
          * Please use the 'Enroll Now' button to inquire about batch availability and secure your spot.
        </p>
      </div>
    </div>
  );
}
