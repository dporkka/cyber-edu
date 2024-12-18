import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function BlogNewsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Add newsletter subscription API call here
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Subscribed successfully!');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-muted p-8 rounded-lg">
      <h3 className="text-2xl font-semibold mb-2">Subscribe to our Newsletter</h3>
      <p className="text-muted-foreground mb-4">
        Get the latest cybersecurity insights delivered to your inbox
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
} 