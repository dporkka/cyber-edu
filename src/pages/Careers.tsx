import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const positions = [
  {
    title: 'Senior Cybersecurity Instructor',
    department: 'Education',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Content Developer',
    department: 'Education',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Security Researcher',
    department: 'Research',
    location: 'Remote',
    type: 'Full-time',
  },
];

export function Careers() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Join Our Team</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          Help us shape the future of cybersecurity education
        </p>

        <div className="space-y-6">
          {positions.map((position, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{position.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="text-sm text-muted-foreground">
                    {position.department}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {position.location}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {position.type}
                  </span>
                </div>
                <Button>Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}