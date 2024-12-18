import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative py-16 md:py-24 bg-muted">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Master Cybersecurity Skills
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Learn from industry experts and advance your career in cybersecurity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}