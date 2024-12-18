type AnalyticsEvent = {
  category: string;
  action: string;
  label?: string;
  value?: number;
};

export function trackEvent({ category, action, label, value }: AnalyticsEvent) {
  // Google Analytics
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Custom analytics endpoint
  fetch(`${import.meta.env.VITE_API_URL}/api/analytics/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category, action, label, value }),
  }).catch(console.error);
}

export function trackSEOImpression(url: string, source: string) {
  trackEvent({
    category: 'SEO',
    action: 'impression',
    label: `${source}:${url}`,
  });
}

export function trackSocialShare(platform: string, url: string) {
  trackEvent({
    category: 'Social',
    action: 'share',
    label: `${platform}:${url}`,
  });
} 