import { Course } from '@/types/course';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CourseInstructorProps {
  instructor: Course['instructor'];
}

export function CourseInstructor({ instructor }: CourseInstructorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Instructor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src={instructor.avatar}
            alt={instructor.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{instructor.name}</h3>
            <p className="text-sm text-muted-foreground">{instructor.bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}