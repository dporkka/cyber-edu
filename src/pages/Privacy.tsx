import { Card, CardContent } from '@/components/ui/card';

export function Privacy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <Card>
          <CardContent className="prose dark:prose-invert max-w-none pt-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us...</p>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide our services...</p>
            <h2>3. Information Sharing</h2>
            <p>We do not sell or rent your personal information...</p>
          </CardContent>
        </Card>
        <p className="text-sm text-muted-foreground text-center mt-4">
          Policy made with <a href="https://templat.org" className="underline">Templat.org</a>
        </p>
      </div>
    </div>
  );
}