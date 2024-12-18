import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { AuthProvider } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/shared/ProtectedRoute';
import { 
  Home,
  About,
  Contact,
  Courses,
  Login,
  SignUp,
  CookiePolicy 
} from '@/pages';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';
import { Blog } from '@/pages/Blog';
import { BlogPost } from '@/pages/BlogPost';

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route 
                  path="/courses" 
                  element={
                    <ProtectedRoute>
                      <Courses />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
              </Routes>
            </ErrorBoundary>
          </Layout>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}