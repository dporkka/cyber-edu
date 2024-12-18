import { useState } from 'react';
import { Icons } from '@/lib/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuth } from '@/contexts/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const handleNavigation = (to: string) => {
    setIsOpen(false);
    if (to === '/courses' && !isAuthenticated) {
      navigate('/login', { state: { from: '/courses' } });
    } else {
      navigate(to);
    }
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
          <Icons.logo className="h-6 w-6" />
          <span className="font-bold text-xl">CyberEdu</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/courses">Courses</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          {isAuthenticated ? (
            <>
              <span className="text-sm text-muted-foreground">
                {user?.name}
              </span>
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icons.menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <button
                onClick={() => handleNavigation('/courses')}
                className="text-lg text-left hover:text-primary"
              >
                Courses
              </button>
              <button
                onClick={() => handleNavigation('/blog')}
                className="text-lg text-left hover:text-primary"
              >
                Blog
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="text-lg text-left hover:text-primary"
              >
                About
              </button>
              {isAuthenticated ? (
                <>
                  <span className="text-sm text-muted-foreground">{user?.name}</span>
                  <Button variant="outline" onClick={handleLogout} className="w-full">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => handleNavigation('/login')}
                    className="w-full"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => handleNavigation('/signup')}
                    className="w-full"
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}