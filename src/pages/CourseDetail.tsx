import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCourse } from '@/services/api';
import { Course } from '@/types/course';
import { CourseHeader } from '@/components/courses/CourseHeader';
import { CourseCurriculum } from '@/components/courses/CourseCurriculum';
import { NotFound } from '@/components/shared/NotFound';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Icons } from '@/lib/icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCourse() {
      if (!courseId) return;
      
      try {
        setLoading(true);
        const data = await fetchCourse(courseId);
        setCourse(data);
      } catch (err) {
        console.error('Error loading course:', err);
        setError('Failed to load course');
      } finally {
        setLoading(false);
      }
    }

    loadCourse();
  }, [courseId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-64 bg-muted rounded-lg" />
          <div className="h-8 w-1/3 bg-muted rounded" />
          <div className="h-4 w-2/3 bg-muted rounded" />
        </div>
      </div>
    );
  }

  if (error || !course) {
    return <NotFound />;
  }

  const handleEnroll = () => {
    // Implement enrollment logic
    console.log('Enrolling in course:', course.id);
  };

  return (
    <div>
      <CourseHeader course={course} onEnroll={handleEnroll} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>{course.description}</p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.curriculum.flatMap(module => 
                        module.lessons.map((lesson, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icons.check className="h-5 w-5 text-primary mt-0.5" />
                            <span>{lesson}</span>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Basic understanding of computer systems</li>
                      <li>Familiarity with command line interfaces</li>
                      <li>Dedication to learn and practice</li>
                    </ul>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum">
                <Card className="p-6">
                  <CourseCurriculum curriculum={course.curriculum} />
                </Card>
              </TabsContent>

              <TabsContent value="instructor">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Meet Your Instructor</h2>
                  <div className="flex items-start gap-6">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="h-24 w-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                      <p className="text-muted-foreground mb-4">Course Instructor</p>
                      <p className="text-sm">{course.instructor.bio}</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 sticky top-6">
              <div className="space-y-6">
                <div className="text-center">
                  <span className="text-3xl font-bold">${course.price}</span>
                </div>
                
                <Button className="w-full" size="lg" onClick={handleEnroll}>
                  Enroll Now
                </Button>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Icons.clock className="h-5 w-5 text-muted-foreground" />
                    <span>{course.duration} of content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.barChart className="h-5 w-5 text-muted-foreground" />
                    <span>{course.level} level</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.graduationCap className="h-5 w-5 text-muted-foreground" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.infinity className="h-5 w-5 text-muted-foreground" />
                    <span>Full lifetime access</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}