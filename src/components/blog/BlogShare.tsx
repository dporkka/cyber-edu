import { Button } from '@/components/ui/button';
import { Icons } from '@/lib/icons';
import { toast } from 'sonner';

interface BlogShareProps {
  title: string;
  url: string;
}

export function BlogShare({ title, url }: BlogShareProps) {
  const shareData = {
    title,
    url,
    text: `Check out this article: ${title}`,
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank')}
      >
        <Icons.twitter className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')}
      >
        <Icons.linkedin className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={handleShare}
      >
        <Icons.share className="h-4 w-4" />
      </Button>
    </div>
  );
} 