import { Card, CardContent } from '@/components/ui/card';

export function Terms() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Terms</h2>
          <p>By accessing this website, you agree to be bound by these Terms of Service.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>This platform is licensed under the following terms:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Free for personal use</li>
            <li>Commercial use allowed for teams of 2 or fewer</li>
            <li>Teams larger than 2 require a lifetime license ($90)</li>
            <li>Purchase options:
              <ul className="list-disc pl-6 mt-2">
                <li><a href="https://buy.stripe.com/28o7sQesAe7BbnicMN" className="text-primary hover:underline">Purchase via Stripe</a></li>
                <li><a href="https://www.paypal.com/donate/?hosted_button_id=KMK2EUCL379LC" className="text-primary hover:underline">Purchase via PayPal</a></li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p>Our services are provided "as is". We make no warranties, expressed or implied.</p>
        </section>
      </div>
    </div>
  );
}