import { Course } from '@/types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Ethical Hacking Fundamentals',
    description: 'Master the essentials of ethical hacking and penetration testing with hands-on labs and real-world scenarios.',
    price: 199.99,
    level: 'Beginner',
    category: 'Ethical Hacking',
    duration: '40 hours',
    instructor: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: 'Certified Ethical Hacker with 10+ years of industry experience',
    },
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    featured: true,
    curriculum: [
      {
        module: 'Introduction to Ethical Hacking',
        lessons: ['What is Ethical Hacking?', 'Legal Considerations', 'Setting Up Your Lab'],
      },
      {
        module: 'Reconnaissance Techniques',
        lessons: ['OSINT Fundamentals', 'Network Scanning', 'Vulnerability Assessment'],
      },
    ],
  },
  {
    id: '2',
    title: 'Advanced Network Security',
    description: 'Learn advanced network security concepts and protect enterprise infrastructure from sophisticated cyber threats.',
    price: 299.99,
    level: 'Advanced',
    category: 'Network Security',
    duration: '60 hours',
    instructor: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Network Security Expert with experience at Fortune 500 companies',
    },
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
    featured: true,
    curriculum: [
      {
        module: 'Network Security Architecture',
        lessons: ['Security Models', 'Zero Trust Architecture', 'Network Segmentation'],
      },
      {
        module: 'Threat Detection and Response',
        lessons: ['SIEM Implementation', 'Incident Response', 'Threat Hunting'],
      },
    ],
  },
  {
    id: '3',
    title: 'Web Application Security',
    description: 'Discover vulnerabilities and implement secure coding practices to protect modern web applications.',
    price: 249.99,
    level: 'Intermediate',
    category: 'Web Security',
    duration: '45 hours',
    instructor: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      bio: 'Senior Application Security Engineer and OWASP contributor',
    },
    thumbnail: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b',
    featured: true,
    curriculum: [
      {
        module: 'Web Security Fundamentals',
        lessons: ['HTTP Security Headers', 'Same-Origin Policy', 'Content Security Policy'],
      },
      {
        module: 'Common Vulnerabilities',
        lessons: ['XSS Prevention', 'SQL Injection', 'CSRF Protection'],
      },
    ],
  },
  {
    id: '4',
    title: 'Cloud Security Architecture',
    description: 'Design and implement secure cloud infrastructure across major platforms including AWS, Azure, and GCP.',
    price: 279.99,
    level: 'Advanced',
    category: 'Cloud Security',
    duration: '50 hours',
    instructor: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bio: 'Cloud Security Architect with multi-cloud expertise',
    },
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    featured: true,
    curriculum: [
      {
        module: 'Cloud Security Fundamentals',
        lessons: ['Shared Responsibility Model', 'Identity Management', 'Data Encryption'],
      },
      {
        module: 'Security Controls',
        lessons: ['Network Security Groups', 'Access Controls', 'Compliance Monitoring'],
      },
    ],
  },
  {
    id: '5',
    title: 'Incident Response Mastery',
    description: 'Learn professional incident response procedures and digital forensics investigation techniques.',
    price: 349.99,
    level: 'Advanced',
    category: 'Incident Response',
    duration: '55 hours',
    instructor: {
      name: 'Rachel Foster',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
      bio: 'Digital Forensics Expert with law enforcement background',
    },
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    featured: true,
    curriculum: [
      {
        module: 'Incident Response Fundamentals',
        lessons: ['IR Planning', 'Incident Classification', 'Evidence Collection'],
      },
      {
        module: 'Digital Forensics',
        lessons: ['Memory Analysis', 'Disk Forensics', 'Network Forensics'],
      },
    ],
  },
  {
    id: '6',
    title: 'Secure DevOps Practices',
    description: 'Integrate security into the DevOps pipeline and implement continuous security testing.',
    price: 299.99,
    level: 'Intermediate',
    category: 'DevSecOps',
    duration: '45 hours',
    instructor: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      bio: 'DevSecOps Engineer and Security Automation Expert',
    },
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    featured: true,
    curriculum: [
      {
        module: 'DevSecOps Fundamentals',
        lessons: ['Security in CI/CD', 'Infrastructure as Code Security', 'Container Security'],
      },
      {
        module: 'Security Automation',
        lessons: ['Security Testing Automation', 'Compliance as Code', 'Security Monitoring'],
      },
    ],
  }
];