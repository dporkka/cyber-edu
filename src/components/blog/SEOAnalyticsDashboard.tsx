import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AnalyticsData {
  impressions: { date: string; count: number }[];
  clicks: { date: string; count: number }[];
  sources: { name: string; count: number }[];
}

export function SEOAnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const response = await fetch('/api/analytics/seo');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Failed to fetch analytics:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAnalytics();
  }, []);

  if (isLoading) return <div>Loading analytics...</div>;
  if (!data) return <div>No analytics data available</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="impressions">
          <TabsList>
            <TabsTrigger value="impressions">Impressions</TabsTrigger>
            <TabsTrigger value="clicks">Clicks</TabsTrigger>
            <TabsTrigger value="sources">Traffic Sources</TabsTrigger>
          </TabsList>

          <TabsContent value="impressions">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.impressions}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          {/* Similar charts for clicks and sources */}
        </Tabs>
      </CardContent>
    </Card>
  );
} 