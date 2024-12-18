import { BlogPost } from '@/types/blog';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <Link to={`/blog/${post.slug}`}>
        <div className="aspect-video relative rounded-t-lg overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>
      </Link>
      <CardHeader className="flex-none">
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <Link 
          to={`/blog/${post.slug}`}
          className="text-xl font-semibold hover:text-primary transition-colors line-clamp-2"
        >
          {post.title}
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
          <div className="flex items-center space-x-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-8 w-8 rounded-full"
            />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 