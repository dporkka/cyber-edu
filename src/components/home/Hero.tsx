import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-background to-muted py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          <Shield className="h-16 w-16 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold">
            Master Cybersecurity
            <br />
            <span className="text-primary">Protect the Digital World</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Learn from industry experts and gain practical skills in cybersecurity.
            Start your journey to becoming a cybersecurity professional today.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}