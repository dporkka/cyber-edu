import { Card, CardContent } from '@/components/ui/card';

export function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Cookie Policy</h1>
        <Card className="mx-4 md:mx-0">
          <CardContent className="prose dark:prose-invert max-w-none pt-6 text-sm md:text-base">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. What Are Cookies</h2>
            <p>Cookies are small text files that are stored on your device...</p>
            <h2>2. How We Use Cookies</h2>
            <p>We use cookies to understand how you interact with our website...</p>
            <h2>3. Managing Cookies</h2>
            <p>You can control and manage cookies in your browser settings...</p>
          </CardContent>
        </Card>
        <p className="text-sm text-muted-foreground text-center mt-4">
          Policy made with <a href="https://templat.org" className="underline">Templat.org</a>
        </p>
      </div>
    </div>
  );
}