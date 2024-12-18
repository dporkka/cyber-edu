import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Icons } from '@/lib/icons';

interface CourseCurriculumProps {
  curriculum: {
    module: string;
    lessons: string[];
  }[];
}

export function CourseCurriculum({ curriculum }: CourseCurriculumProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Course Content</h2>
        <div className="text-sm text-muted-foreground">
          {curriculum.reduce((acc, module) => acc + module.lessons.length, 0)} lessons
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {curriculum.map((module, moduleIndex) => (
          <AccordionItem key={moduleIndex} value={`module-${moduleIndex}`}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex flex-1 items-center justify-between pr-4">
                <div>
                  <p className="text-sm font-medium">Module {moduleIndex + 1}</p>
                  <p className="text-base">{module.module}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {module.lessons.length} lessons
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted/50"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Icons.play className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{lesson}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">5:00</div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}