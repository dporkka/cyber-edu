export const sampleBlogPosts = [
  {
    id: '1',
    title: 'Understanding Zero Trust Security: A Comprehensive Guide',
    slug: 'understanding-zero-trust-security',
    excerpt: 'Learn about the principles of Zero Trust Security and how to implement it in your organization.',
    content: `
      <h2>What is Zero Trust Security?</h2>
      <p>Zero Trust is a security concept centered on the belief that organizations should not automatically trust anything inside or outside its perimeters...</p>
      
      <h2>Core Principles</h2>
      <ul>
        <li>Never trust, always verify</li>
        <li>Assume breach</li>
        <li>Verify explicitly</li>
      </ul>
      
      <h2>Implementation Steps</h2>
      <p>1. Identify your protect surface...</p>
      <p>2. Map the transaction flows...</p>
      <p>3. Architect a Zero Trust network...</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: 'Cybersecurity Expert with 10+ years of experience',
    },
    publishedAt: '2024-03-15T10:00:00Z',
    tags: ['Zero Trust', 'Security Architecture', 'Enterprise Security'],
    readingTime: '8 min read',
    seo: {
      title: 'Understanding Zero Trust Security: A Comprehensive Guide | CyberEdu',
      description: 'Learn about Zero Trust Security principles, implementation strategies, and best practices for modern enterprise security architecture.',
      keywords: ['zero trust', 'security', 'cybersecurity', 'enterprise security'],
    },
  },
  {
    id: '2',
    title: 'Cloud Security Best Practices for 2024',
    slug: 'cloud-security-best-practices-2024',
    excerpt: 'Stay secure in the cloud with these essential security practices and recommendations.',
    content: `
      <h2>The Evolution of Cloud Security</h2>
      <p>As organizations continue to migrate to the cloud, security practices must evolve...</p>
      
      <h2>Key Security Measures</h2>
      <ul>
        <li>Identity and Access Management (IAM)</li>
        <li>Data Encryption</li>
        <li>Network Security</li>
        <li>Compliance and Governance</li>
      </ul>
      
      <h2>Implementation Guidelines</h2>
      <p>1. Configure strong authentication...</p>
      <p>2. Implement least privilege access...</p>
      <p>3. Enable encryption at rest and in transit...</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    author: {
      id: '2',
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Cloud Security Architect and DevSecOps Expert',
    },
    publishedAt: '2024-03-10T08:30:00Z',
    tags: ['Cloud Security', 'Best Practices', 'DevSecOps'],
    readingTime: '10 min read',
    seo: {
      title: 'Cloud Security Best Practices for 2024 | CyberEdu',
      description: 'Learn the latest cloud security best practices and recommendations for protecting your cloud infrastructure in 2024.',
      keywords: ['cloud security', 'best practices', 'cloud computing', 'security'],
    },
  },
  {
    id: '3',
    title: 'Securing Kubernetes Clusters: Best Practices and Common Pitfalls',
    slug: 'securing-kubernetes-clusters',
    excerpt: 'Learn how to properly secure your Kubernetes clusters and avoid common security mistakes.',
    content: `
      <h2>Introduction to Kubernetes Security</h2>
      <p>Kubernetes has become the de facto standard for container orchestration, but with great power comes great responsibility...</p>
      
      <h2>Essential Security Measures</h2>
      <ul>
        <li>RBAC Configuration</li>
        <li>Network Policies</li>
        <li>Pod Security Policies</li>
        <li>Image Scanning</li>
      </ul>
      
      <h2>Common Pitfalls</h2>
      <p>1. Misconfigured RBAC permissions...</p>
      <p>2. Exposed Kubernetes Dashboard...</p>
      <p>3. Insecure Pod configurations...</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9',
    author: {
      id: '3',
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bio: 'Cloud Native Security Engineer',
    },
    publishedAt: '2024-03-08T09:15:00Z',
    tags: ['Kubernetes', 'Container Security', 'DevSecOps'],
    readingTime: '12 min read',
    seo: {
      title: 'Securing Kubernetes Clusters: Best Practices and Common Pitfalls | CyberEdu',
      description: 'Comprehensive guide to securing Kubernetes clusters, including RBAC, network policies, and avoiding common security mistakes.',
      keywords: ['kubernetes', 'security', 'container security', 'k8s', 'devsecops'],
    },
  },
  {
    id: '4',
    title: 'Web Application Security Testing: A Practical Guide',
    slug: 'web-application-security-testing',
    excerpt: 'Master the essential techniques and tools for testing web application security.',
    content: `
      <h2>The Importance of Security Testing</h2>
      <p>In today's interconnected world, web applications are prime targets for attackers...</p>
      
      <h2>Testing Methodologies</h2>
      <ul>
        <li>Static Application Security Testing (SAST)</li>
        <li>Dynamic Application Security Testing (DAST)</li>
        <li>Interactive Application Security Testing (IAST)</li>
        <li>Manual Penetration Testing</li>
      </ul>
      
      <h2>Essential Tools</h2>
      <p>1. OWASP ZAP for dynamic testing...</p>
      <p>2. SonarQube for static analysis...</p>
      <p>3. Burp Suite for manual testing...</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    author: {
      id: '4',
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      bio: 'Application Security Specialist & OWASP Contributor',
    },
    publishedAt: '2024-03-05T14:20:00Z',
    tags: ['Web Security', 'Penetration Testing', 'Security Tools'],
    readingTime: '15 min read',
    seo: {
      title: 'Web Application Security Testing: A Practical Guide | CyberEdu',
      description: 'Learn practical techniques and tools for comprehensive web application security testing.',
      keywords: ['web security', 'penetration testing', 'security testing', 'appsec'],
    },
  },
  {
    id: '5',
    title: 'Incident Response Planning: Preparing for the Inevitable',
    slug: 'incident-response-planning',
    excerpt: 'Develop a robust incident response plan to effectively handle security incidents.',
    content: `
      <h2>Why Incident Response Planning Matters</h2>
      <p>It's not a matter of if, but when a security incident will occur...</p>
      
      <h2>Key Components of an IR Plan</h2>
      <ul>
        <li>Preparation</li>
        <li>Detection & Analysis</li>
        <li>Containment</li>
        <li>Eradication & Recovery</li>
        <li>Post-Incident Activities</li>
      </ul>
      
      <h2>Building Your IR Team</h2>
      <p>1. Define roles and responsibilities...</p>
      <p>2. Establish communication channels...</p>
      <p>3. Create incident classification guidelines...</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
    author: {
      id: '5',
      name: 'Rachel Foster',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
      bio: 'Incident Response Manager & Digital Forensics Expert',
    },
    publishedAt: '2024-03-01T11:45:00Z',
    tags: ['Incident Response', 'Security Planning', 'Digital Forensics'],
    readingTime: '11 min read',
    seo: {
      title: 'Incident Response Planning: Preparing for the Inevitable | CyberEdu',
      description: 'Learn how to develop and implement an effective incident response plan for your organization.',
      keywords: ['incident response', 'security planning', 'digital forensics', 'cybersecurity'],
    },
  }
]; 