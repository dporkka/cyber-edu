import { Alert, AlertDescription, AlertTitle } from '@/components/ui/card';
import { analyzeSEO, analyzeReadability } from '@/lib/seo';
import { Icons } from '@/lib/icons';
import { Progress } from '@/components/ui/progress';

interface SEOAnalysisProps {
  metaTitle: string;
  metaDescription: string;
  content: string;
}

export function SEOAnalysis({ metaTitle, metaDescription, content }: SEOAnalysisProps) {
  const seoSuggestions = analyzeSEO(metaTitle, metaDescription, content);
  const readability = analyzeReadability(content);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">SEO Analysis</h3>
        {seoSuggestions.map((suggestion, index) => (
          <Alert
            key={index}
            variant={suggestion.type === 'error' ? 'destructive' : suggestion.type === 'warning' ? 'default' : 'success'}
          >
            {suggestion.type === 'error' && <Icons.alertCircle className="h-4 w-4" />}
            {suggestion.type === 'warning' && <Icons.alertTriangle className="h-4 w-4" />}
            {suggestion.type === 'success' && <Icons.checkCircle className="h-4 w-4" />}
            <AlertTitle>
              {suggestion.type === 'error' ? 'Error' : suggestion.type === 'warning' ? 'Warning' : 'Success'}
            </AlertTitle>
            <AlertDescription>{suggestion.message}</AlertDescription>
          </Alert>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Readability Score</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Flesch Reading Ease</span>
            <span>{readability.score}/100</span>
          </div>
          <Progress value={readability.score} />
          <p className="text-sm text-muted-foreground">
            {readability.score > 80 ? 'Easy to read' :
             readability.score > 60 ? 'Moderately easy to read' :
             'Difficult to read'}
          </p>
        </div>
        {readability.suggestions.map((suggestion, index) => (
          <Alert key={index}>
            <AlertDescription>{suggestion}</AlertDescription>
          </Alert>
        ))}
      </div>
    </div>
  );
} 