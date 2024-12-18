import { Course } from '@/types/course';

const API_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

export async function fetchCourses(): Promise<Course[]> {
  try {
    const response = await fetch(`${API_URL}/api/courses?populate=*`);
    if (!response.ok) throw new Error('Failed to fetch courses');
    const data = await response.json();
    return data.data.map(transformStrapiCourse);
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}

export async function fetchCourse(id: string): Promise<Course> {
  try {
    const response = await fetch(`${API_URL}/api/courses/${id}?populate=*`);
    if (!response.ok) throw new Error('Failed to fetch course');
    const data = await response.json();
    return transformStrapiCourse(data.data);
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
}

function transformStrapiCourse(strapiCourse: any): Course {
  return {
    id: strapiCourse.id.toString(),
    title: strapiCourse.attributes.title,
    description: strapiCourse.attributes.description,
    price: strapiCourse.attributes.price,
    level: strapiCourse.attributes.level,
    category: strapiCourse.attributes.category,
    duration: strapiCourse.attributes.duration,
    instructor: {
      name: strapiCourse.attributes.instructor.data.attributes.name,
      avatar: strapiCourse.attributes.instructor.data.attributes.avatar.data.attributes.url,
      bio: strapiCourse.attributes.instructor.data.attributes.bio,
    },
    thumbnail: strapiCourse.attributes.thumbnail.data.attributes.url,
    featured: strapiCourse.attributes.featured,
    curriculum: strapiCourse.attributes.curriculum,
  };
}

// Add blog-related API functions
export async function getBlogPosts() {
  try {
    const response = await fetch(`${API_URL}/api/blog-posts?populate=*`);
    if (!response.ok) throw new Error('Failed to fetch blog posts');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export async function getBlogPost(slug: string) {
  try {
    const response = await fetch(`${API_URL}/api/blog-posts?filters[slug]=${slug}&populate=*`);
    if (!response.ok) throw new Error('Failed to fetch blog post');
    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
}