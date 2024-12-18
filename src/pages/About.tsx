import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About CyberEdu</h1>
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert">
            <p>
              CyberEdu is dedicated to providing high-quality cybersecurity education
              to students and professionals worldwide. Our platform combines expert
              instruction with hands-on learning to prepare you for real-world
              challenges in cybersecurity.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}