import { Course } from '@/types/course';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, BookOpen } from 'lucide-react';

interface CourseHeaderProps {
  course: Course;
  onEnroll: () => void;
}

export function CourseHeader({ course, onEnroll }: CourseHeaderProps) {
  return (
    <div className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Badge>{course.level}</Badge>
            <h1 className="text-4xl font-bold">{course.title}</h1>
            <p className="text-lg text-muted-foreground">{course.description}</p>
            
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {course.category}
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                {course.curriculum.reduce((acc, module) => acc + module.lessons.length, 0)} Lessons
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-3xl font-bold">${course.price}</span>
              </div>
              <Button className="w-full" size="lg" onClick={onEnroll}>
                Enroll Now
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}