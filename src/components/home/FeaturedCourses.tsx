import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import { courses } from '@/data/courses';
import { Link } from 'react-router-dom';

export function FeaturedCourses() {
  const featuredCourses = courses.filter((course) => course.featured);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start your cybersecurity journey with our most popular courses, designed and taught by industry experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <Link to={`/courses/${course.id}`} key={course.id}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-4">
                  <div className="aspect-video relative">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="rounded-lg object-cover w-full h-full"
                    />
                    <Badge className="absolute top-2 right-2">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="line-clamp-2 h-[56px]">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 h-[40px]">
                      {course.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <span className="font-bold">${course.price}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}