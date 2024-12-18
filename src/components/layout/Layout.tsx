import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toaster } from 'sonner';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}