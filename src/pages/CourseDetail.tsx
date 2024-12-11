import { useParams } from 'react-router-dom';
import { useCourse } from '@/hooks/useCourse';
import { CourseHeader } from '@/components/courses/CourseHeader';
import { CourseInstructor } from '@/components/courses/CourseInstructor';
import { CourseCurriculum } from '@/components/courses/CourseCurriculum';
import { NotFound } from '@/components/shared/NotFound';

export function CourseDetail() {
  const { courseId } = useParams();
  const { course, handleEnroll } = useCourse(courseId || '');

  if (!course) {
    return <NotFound />;
  }

  return (
    <div>
      <CourseHeader course={course} onEnroll={handleEnroll} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <CourseCurriculum curriculum={course.curriculum} />
          </div>
          
          <div>
            <CourseInstructor instructor={course.instructor} />
          </div>
        </div>
      </div>
    </div>
  );
}