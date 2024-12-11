import { Course } from '@/types/course';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/courses/${course.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="aspect-video relative mb-4">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="rounded-lg object-cover w-full h-full"
            />
            <Badge className="absolute top-2 right-2">{course.level}</Badge>
          </div>
          <CardTitle className="line-clamp-2">{course.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {course.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{course.category}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="h-6 w-6 rounded-full"
                />
                <span className="text-sm">{course.instructor.name}</span>
              </div>
              <span className="font-bold">${course.price}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}