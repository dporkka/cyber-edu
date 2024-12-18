import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Blog } from '@/pages/Blog';
import { BlogPost } from '@/pages/BlogPost';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Courses } from '@/pages/Courses';
import { CourseDetail } from '@/pages/CourseDetail';
import { Login } from '@/pages/Login';
import { SignUp } from '@/pages/SignUp';

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </RouterRoutes>
  );
} 