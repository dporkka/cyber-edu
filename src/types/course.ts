export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  duration: string;
  instructor: {
    name: string;
    avatar: string;
    bio: string;
  };
  thumbnail: string;
  featured: boolean;
  curriculum: {
    module: string;
    lessons: string[];
  }[];
}