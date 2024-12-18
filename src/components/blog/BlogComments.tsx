import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { formatDate } from '@/lib/utils';

interface Comment {
  id: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  createdAt: string;
}

interface BlogCommentsProps {
  postId: string;
}

export function BlogComments({ postId }: BlogCommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, isAuthenticated } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast.error('Please login to comment');
      return;
    }

    setIsLoading(true);
    try {
      // Add API call to save comment
      const comment: Comment = {
        id: Date.now().toString(),
        content: newComment,
        author: {
          name: user?.name || 'Anonymous',
          avatar: user?.avatar,
        },
        createdAt: new Date().toISOString(),
      };

      setComments([comment, ...comments]);
      setNewComment('');
      toast.success('Comment posted successfully');
    } catch (error) {
      toast.error('Failed to post comment');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 pt-8 border-t">
      <h2 className="text-2xl font-semibold mb-6">Comments</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <Textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-4"
          required
          disabled={!isAuthenticated || isLoading}
        />
        <Button type="submit" disabled={!isAuthenticated || isLoading}>
          {isLoading ? 'Posting...' : 'Post Comment'}
        </Button>
        {!isAuthenticated && (
          <p className="text-sm text-muted-foreground mt-2">
            Please login to comment
          </p>
        )}
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarImage src={comment.author.avatar} />
              <AvatarFallback>
                {comment.author.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{comment.author.name}</span>
                <span className="text-sm text-muted-foreground">
                  {formatDate(comment.createdAt)}
                </span>
              </div>
              <p className="mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 