import { Course } from '@/types/course';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/lib/icons';

interface CourseHeaderProps {
  course: Course;
  onEnroll: () => void;
}

export function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge>{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icons.clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.graduationCap className="h-4 w-4" />
                  <span>{course.curriculum.reduce((acc, module) => acc + module.lessons.length, 0)} lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.users className="h-4 w-4" />
                  <span>Created by {course.instructor.name}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}