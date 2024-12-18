import { useEffect, useState } from 'react';
import { BlogPost } from '@/types/blog';
import { getBlogPosts } from '@/services/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

const POSTS_PER_PAGE = 6;

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const searchContent = `${post.title} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase();
    return searchContent.includes(searchQuery.toLowerCase());
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-center mb-8">Cybersecurity Blog</h1>
        <BlogSearch value={searchQuery} onChange={setSearchQuery} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paginatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {filteredPosts.length > POSTS_PER_PAGE && (
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {filteredPosts.length === 0 && (
        <p className="text-center text-muted-foreground">
          No posts found matching your search.
        </p>
      )}
    </div>
  );
} 