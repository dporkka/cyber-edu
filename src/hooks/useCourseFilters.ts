import { useState, useCallback, useMemo } from 'react';
import { CourseFilters, PriceRange } from '@/types/filters';
import { Course } from '@/types/course';
import { courses } from '@/data/courses';

const initialFilters: CourseFilters = {
  search: '',
  level: [],
  priceRange: [0, 1000],
  category: [],
};

export function useCourseFilters() {
  const [filters, setFilters] = useState<CourseFilters>(initialFilters);

  const updateFilter = useCallback((key: keyof CourseFilters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesLevel =
        filters.level.length === 0 || filters.level.includes(course.level);
      const matchesPrice =
        course.price >= filters.priceRange[0] &&
        course.price <= filters.priceRange[1];
      const matchesCategory =
        filters.category.length === 0 ||
        filters.category.includes(course.category);

      return matchesSearch && matchesLevel && matchesPrice && matchesCategory;
    });
  }, [filters]);

  return {
    filters,
    updateFilter,
    filteredCourses,
  };
}