import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogPost as BlogPostType } from '@/types/blog';
import { getBlogPost } from '@/services/blog';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import { Helmet } from 'react-helmet-async';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      
      try {
        const data = await getBlogPost(slug);
        setPost(data);
      } catch (error) {
        console.error('Failed to fetch blog post:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.seo.title}</title>
        <meta name="description" content={post.seo.description} />
        <meta name="keywords" content={post.seo.keywords.join(', ')} />
      </Helmet>
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-between text-muted-foreground mb-8">
            <div className="flex items-center space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm">{formatDate(post.publishedAt)} · {post.readingTime}</div>
              </div>
            </div>
          </div>
          <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div 
          className="prose prose-slate dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  );
} 