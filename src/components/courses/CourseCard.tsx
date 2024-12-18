import { Course } from '@/types/course';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/lib/icons';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-none">
        <div className="aspect-video relative rounded-t-lg overflow-hidden">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-2 mt-4">
          <CardTitle className="text-lg md:text-xl line-clamp-2">{course.title}</CardTitle>
          <CardDescription className="line-clamp-2">{course.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{course.level}</Badge>
            <Badge variant="secondary">{course.category}</Badge>
          </div>
          <div className="flex items-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center">
              <Icons.clock className="mr-1 h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <Icons.users className="mr-1 h-4 w-4" />
              <span>Enrolled</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}