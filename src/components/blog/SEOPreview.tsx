import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SEOPreviewProps {
  metaTitle: string;
  metaDescription: string;
  url: string;
  image?: string;
}

export function SEOPreview({ metaTitle, metaDescription, url, image }: SEOPreviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="google">
          <TabsList>
            <TabsTrigger value="google">Google</TabsTrigger>
            <TabsTrigger value="facebook">Facebook</TabsTrigger>
            <TabsTrigger value="twitter">Twitter</TabsTrigger>
          </TabsList>

          <TabsContent value="google" className="space-y-4">
            <div className="max-w-[600px] space-y-1">
              <div className="text-blue-600 text-xl hover:underline">
                {metaTitle}
              </div>
              <div className="text-green-700 text-sm">
                {url}
              </div>
              <div className="text-sm text-gray-600">
                {metaDescription}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="facebook">
            <Card>
              {image && (
                <img 
                  src={image} 
                  alt={metaTitle}
                  className="w-full h-[300px] object-cover"
                />
              )}
              <CardContent className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  {url}
                </div>
                <h3 className="font-bold">{metaTitle}</h3>
                <p className="text-sm text-muted-foreground">
                  {metaDescription}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="twitter">
            <Card>
              {image && (
                <img 
                  src={image} 
                  alt={metaTitle}
                  className="w-full h-[250px] object-cover rounded-t-lg"
                />
              )}
              <CardContent className="space-y-2">
                <h3 className="font-bold">{metaTitle}</h3>
                <p className="text-sm text-muted-foreground">
                  {metaDescription}
                </p>
                <div className="text-sm text-muted-foreground">
                  {url}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 