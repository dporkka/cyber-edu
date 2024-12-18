import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { Hero } from '@/components/home/Hero';
import { WhyUs } from '@/components/home/WhyUs';

export function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCourses />
      <WhyUs />
    </div>
  );
}