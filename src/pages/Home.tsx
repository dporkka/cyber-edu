import { Icons } from '@/lib/icons';
import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { Hero } from '@/components/home/Hero';
import { WhyUs } from '@/components/home/WhyUs';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Icons.logo className="h-8 w-8" />
        <h1 className="text-3xl font-bold">Welcome to CyberEdu</h1>
      </div>
      <Hero />
      <FeaturedCourses />
      <WhyUs />
    </div>
  );
}