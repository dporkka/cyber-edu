import { API_URL } from '@/config';
import { BlogPost } from '@/types/blog';
import { sampleBlogPosts } from '@/data/blog';

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Use sample data during development
  if (import.meta.env.DEV) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(sampleBlogPosts);
      }, 1000); // Simulate network delay
    });
  }

  // Real API call for production
  const response = await fetch(`${API_URL}/api/blog-posts?populate=*`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }

  const data = await response.json();
  return data.data.map((post: any) => ({
    id: post.id,
    title: post.attributes.title,
    slug: post.attributes.slug,
    excerpt: post.attributes.excerpt,
    content: post.attributes.content,
    coverImage: post.attributes.coverImage.data.attributes.url,
    author: {
      id: post.attributes.author.data.id,
      name: post.attributes.author.data.attributes.name,
      avatar: post.attributes.author.data.attributes.avatar.data.attributes.url,
      bio: post.attributes.author.data.attributes.bio,
    },
    publishedAt: post.attributes.publishedAt,
    tags: post.attributes.tags.data.map((tag: any) => tag.attributes.name),
    readingTime: post.attributes.readingTime,
    seo: {
      title: post.attributes.seo.title,
      description: post.attributes.seo.description,
      keywords: post.attributes.seo.keywords,
    },
  }));
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  // Use sample data during development
  if (import.meta.env.DEV) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const post = sampleBlogPosts.find(p => p.slug === slug);
        if (post) {
          resolve(post);
        } else {
          reject(new Error('Post not found'));
        }
      }, 1000);
    });
  }

  // Real API call for production
  const response = await fetch(`${API_URL}/api/blog-posts/${slug}?populate=*`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch blog post');
  }

  const data = await response.json();
  const post = data.data;
  
  return {
    id: post.id,
    title: post.attributes.title,
    slug: post.attributes.slug,
    excerpt: post.attributes.excerpt,
    content: post.attributes.content,
    coverImage: post.attributes.coverImage.data.attributes.url,
    author: {
      id: post.attributes.author.data.id,
      name: post.attributes.author.data.attributes.name,
      avatar: post.attributes.author.data.attributes.avatar.data.attributes.url,
      bio: post.attributes.author.data.attributes.bio,
    },
    publishedAt: post.attributes.publishedAt,
    tags: post.attributes.tags.data.map((tag: any) => tag.attributes.name),
    readingTime: post.attributes.readingTime,
    seo: {
      title: post.attributes.seo.title,
      description: post.attributes.seo.description,
      keywords: post.attributes.seo.keywords,
    },
  };
} 

export async function createBlogPost(data: CreateBlogPostData) {
  const response = await fetch(`${API_URL}/api/blog-posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        excerpt: data.excerpt,
        seo: {
          metaTitle: data.seo.metaTitle,
          metaDescription: data.seo.metaDescription,
          keywords: JSON.stringify(data.seo.keywords),
          metaRobots: 'index, follow',
          structuredData: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": data.title,
            "description": data.excerpt,
            "author": {
              "@type": "Person",
              "name": data.author.name
            },
            "datePublished": new Date().toISOString()
          })
        }
      }
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create blog post');
  }

  return response.json();
} 