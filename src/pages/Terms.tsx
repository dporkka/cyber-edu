import { Card, CardContent } from '@/components/ui/card';

export function Terms() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <Card>
          <CardContent className="prose dark:prose-invert max-w-none pt-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by these terms...</p>
            <h2>2. User Responsibilities</h2>
            <p>You agree to use our services in accordance with applicable laws...</p>
            <h2>3. Intellectual Property</h2>
            <p>All content on this website is protected by copyright and other intellectual property rights...</p>
          </CardContent>
        </Card>
        <p className="text-sm text-muted-foreground text-center mt-4">
          Policy made with <a href="https://templat.org" className="underline">Templat.org</a>
        </p>
      </div>
    </div>
  );
}