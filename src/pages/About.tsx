import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <Shield className="h-16 w-16 mx-auto text-primary" />
        <h1 className="text-4xl font-bold">About CyberEdu</h1>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              This site was created by David Porkka and was built with TypeScript and React. 
              Our mission is to provide high-quality cybersecurity education to aspiring professionals worldwide.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}