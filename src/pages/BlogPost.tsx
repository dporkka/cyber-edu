import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogPost, type Post } from '@/lib/api';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      if (!slug) return;
      try {
        const data = await getBlogPost(slug);
        setPost(data);
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return <div>Loading post...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">
        {post.attributes.title}
      </h1>
      <div className="flex items-center gap-4 mb-8 text-muted-foreground">
        <span>{post.attributes.readingTime}</span>
        <span>By {post.attributes.author.data.attributes.name}</span>
      </div>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.attributes.content }}
      />
      <div className="mt-8 pt-8 border-t">
        <div className="flex gap-2">
          {post.attributes.tags.data.map((tag) => (
            <span 
              key={tag.attributes.name}
              className="bg-secondary px-3 py-1 rounded-full text-sm"
            >
              {tag.attributes.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
} 