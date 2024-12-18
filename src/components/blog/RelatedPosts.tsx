import { BlogPost } from '@/types/blog';
import { BlogCard } from './BlogCard';

interface RelatedPostsProps {
  currentPost: BlogPost;
  posts: BlogPost[];
}

export function RelatedPosts({ currentPost, posts }: RelatedPostsProps) {
  const relatedPosts = posts
    .filter(post => 
      post.id !== currentPost.id && 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t pt-8">
      <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
} 