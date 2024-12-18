import { Icons } from '@/lib/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Expert Instructors',
    icon: 'users',
    description: 'Learn from industry professionals with years of experience.',
  },
  {
    title: 'Hands-on Learning',
    icon: 'laptop',
    description: 'Practice in real-world scenarios and lab environments.',
  },
  {
    title: 'Industry Recognition',
    icon: 'certificate',
    description: 'Earn certificates recognized by top companies.',
  },
];

export function WhyUs() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = Icons[feature.icon as keyof typeof Icons];
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
} 