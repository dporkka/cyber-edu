import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts, type Post } from '@/lib/api';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { BlogTagFilter } from '@/components/blog/BlogTagFilter';
import { Skeleton } from '@/components/ui/skeleton';

const POSTS_PER_PAGE = 6;

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setError(null);
        const data = await getBlogPosts();
        setPosts(data || []); // Ensure we always have an array
      } catch (error) {
        console.error('Error loading posts:', error);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTag]);

  // Get all unique tags from posts
  const allTags = Array.from(
    new Set(
      posts?.flatMap((post) =>
        post.attributes.tags.data.map((tag) => tag.attributes.name)
      ) || []
    )
  ).sort();

  // Filter posts based on search and tags
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.attributes.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag
      ? post.attributes.tags.data.some(
          (tag) => tag.attributes.name === selectedTag
        )
      : true;
    return matchesSearch && matchesTag;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <Skeleton className="h-8 w-64 mb-8" />
          <Skeleton className="h-10 w-full mb-4" />
          <div className="flex gap-2 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-6 w-20" />
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-64" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
        <BlogSearch value={searchQuery} onChange={setSearchQuery} />
        <BlogTagFilter
          tags={allTags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {paginatedPosts.map((post) => (
          <article
            key={post.id}
            className="group relative flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6 flex-1">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary">
                <Link to={`/blog/${post.attributes.slug}`}>
                  {post.attributes.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {post.attributes.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span>{post.attributes.readingTime}</span>
                <div className="flex flex-wrap gap-2">
                  {post.attributes.tags.data.map((tag) => (
                    <span
                      key={tag.attributes.name}
                      className="bg-secondary px-2 py-1 rounded-md text-xs"
                    >
                      {tag.attributes.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
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