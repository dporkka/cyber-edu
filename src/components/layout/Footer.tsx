import { ShieldCheck, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6" />
              <span className="font-bold text-xl">CyberEdu</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering the next generation of cybersecurity professionals with
              expert-led courses and hands-on training.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses?category=ethical-hacking" className="text-sm text-muted-foreground hover:text-foreground">Ethical Hacking</Link></li>
              <li><Link to="/courses?category=network-security" className="text-sm text-muted-foreground hover:text-foreground">Network Security</Link></li>
              <li><Link to="/courses?category=web-security" className="text-sm text-muted-foreground hover:text-foreground">Web Security</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} CyberEdu. Designed by{' '}
              <a href="https://davidporkka.com" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">
                David Porkka
              </a>
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/dporkka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://buy.stripe.com/28o7sQesAe7BbnicMN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <stripe-buy-button
                  buy-button-id="buy_btn_1QUeRPCzsQWfzJM5JKJZHsFs"
                  publishable-key="pk_live_51Ocs15CzsQWfzJM5Lu8UW3ZdmMVNiNz0Nlu1zMNwyxyyaI1SaelB9yGF84a4Ivx3WLGBM97N6VYec0pE9q9aNgcZ005W7TTGyG"
                >
                </stripe-buy-button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}