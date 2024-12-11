import { CourseCard } from '@/components/courses/CourseCard';
import { CourseFilters } from '@/components/courses/CourseFilters';
import { useCourseFilters } from '@/hooks/useCourseFilters';

export function Courses() {
  const { filters, updateFilter, filteredCourses } = useCourseFilters();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-64 flex-shrink-0">
          <CourseFilters filters={filters} onFilterChange={updateFilter} />
        </aside>
        
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No courses found matching your criteria.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}