import { sampleBlogPosts } from '@/data/blog';

const STRAPI_URL = 'http://localhost:1337';

export interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    readingTime: string;
    publishedAt: string;
    author: {
      data: {
        attributes: {
          name: string;
          bio: string;
          twitter: string;
          linkedin: string;
        }
      }
    };
    tags: {
      data: Array<{
        attributes: {
          name: string;
        }
      }>
    };
    seo: {
      metaTitle: string;
      metaDescription: string;
      keywords: string[];
      metaRobots: string;
    };
  }
}

export async function getBlogPosts(): Promise<Post[]> {
  if (import.meta.env.DEV) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(sampleBlogPosts);
      }, 1000);
    });
  }

  try {
    const response = await fetch(`${STRAPI_URL}/api/blog-post?populate=*`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export async function getBlogPost(slug: string): Promise<Post | null> {
  if (import.meta.env.DEV) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const post = sampleBlogPosts.find(p => p.slug === slug);
        resolve(post || null);
      }, 1000);
    });
  }

  try {
    const response = await fetch(
      `${STRAPI_URL}/api/blog-post?filters[slug][$eq]=${slug}&populate=*`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
} 