import { Course } from '@/types/course';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircle2 } from 'lucide-react';

interface CourseCurriculumProps {
  curriculum: Course['curriculum'];
}

export function CourseCurriculum({ curriculum }: CourseCurriculumProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Course Curriculum</h2>
      <Accordion type="single" collapsible className="w-full">
        {curriculum.map((module, index) => (
          <AccordionItem key={index} value={`module-${index}`}>
            <AccordionTrigger className="text-left">
              <div className="flex items-center space-x-2">
                <span>{module.module}</span>
                <span className="text-sm text-muted-foreground">
                  ({module.lessons.length} lessons)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li
                    key={lessonIndex}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}