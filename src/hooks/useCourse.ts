import { useCallback } from 'react';
import { courses } from '@/data/courses';
import { toast } from 'sonner';

export function useCourse(courseId: string) {
  const course = courses.find((c) => c.id === courseId);

  const handleEnroll = useCallback(() => {
    // In a real app, this would integrate with a payment system
    toast.success('Enrollment successful!', {
      description: 'You will receive an email with further instructions.',
    });
  }, []);

  return {
    course,
    handleEnroll,
  };
}