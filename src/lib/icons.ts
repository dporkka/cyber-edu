import { 
  Users, 
  Laptop, 
  Award,
  Menu,
  LogOut,
  Shield,
  Lock,
  BookOpen,
  GraduationCap,
  Search,
  ChevronLeft,
  ChevronRight,
  Clock,
  // Add other icons you need
} from 'lucide-react';

export const Icons = {
  logo: Shield,
  users: Users,
  laptop: Laptop,
  certificate: Award,
  menu: Menu,
  logout: LogOut,
  security: Lock,
  education: BookOpen,
  graduation: GraduationCap,
  clock: Clock,
  search: Search,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  // Add other icons
} as const;

export type IconKeys = keyof typeof Icons; 