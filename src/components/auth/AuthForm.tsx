import { Icons } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (data: any) => void;
}

export function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      await onSubmit(Object.fromEntries(formData));
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-2 text-center">
        <div className="flex justify-center">
          <Icons.key className="h-8 w-8" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">
          {type === 'login' ? 'Welcome back' : 'Create an account'}
        </h1>
        <p className="text-sm text-muted-foreground">
          {type === 'login' 
            ? 'Enter your credentials to access your account' 
            : 'Enter your information to create an account'}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              disabled={isLoading}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              disabled={isLoading}
              required
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.key className="mr-2 h-4 w-4 animate-spin" />
            )}
            {type === 'login' ? 'Sign in' : 'Sign up'}
          </Button>
        </div>
      </form>
    </div>
  );
} 