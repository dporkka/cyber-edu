import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Icons } from '@/lib/icons';

export function Navigation() {
  return (
    <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2">
          <Icons.logo className="h-6 w-6" />
          <span className="font-semibold">CyberEdu</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/courses" className="hover:text-primary transition-colors">
            Courses
          </Link>
          <Link to="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/about" className="hover:text-primary transition-colors">
            About
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/login">
          <Button variant="ghost">Log in</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign up</Button>
        </Link>
      </div>
    </nav>
  );
} 