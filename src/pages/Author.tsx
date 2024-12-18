import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogPost, Author as AuthorType } from '@/types/blog';
import { getAuthor } from '@/services/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { Helmet } from 'react-helmet-async';

export function Author() {
  const { id } = useParams<{ id: string }>();
  const [author, setAuthor] = useState<AuthorType & { posts: BlogPost[] } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAuthor() {
      if (!id) return;
      
      try {
        const data = await getAuthor(id);
        setAuthor(data);
      } catch (error) {
        console.error('Failed to fetch author:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAuthor();
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`${author.name} - CyberEdu Blog`}</title>
        <meta name="description" content={author.bio} />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <img
              src={author.avatar}
              alt={author.name}
              className="h-20 w-20 rounded-full"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
              <p className="text-muted-foreground">{author.bio}</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Articles by {author.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {author.posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 