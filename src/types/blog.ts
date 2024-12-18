export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  publishedAt: string;
  tags: string[];
  readingTime: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
} 