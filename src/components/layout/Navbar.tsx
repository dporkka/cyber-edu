import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ShieldCheck className="h-6 w-6" />
          <span className="font-bold text-xl">CyberEdu</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Button asChild variant="outline">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}