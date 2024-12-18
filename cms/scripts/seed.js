async function seedData() {
  try {
    console.log('Starting seed process...');
    
    // Initialize Strapi correctly for v5.6.0
    const Strapi = require('@strapi/strapi');
    const app = await Strapi.createStrapi({
      appDir: process.cwd(),
      autoReload: false,
    });
    await app.load();
    await app.server.mount();

    console.log('Strapi started, beginning seed...');

    try {
      // Clear existing data
      console.log('Clearing existing data...');
      await app.db.query('api::blog-post.blog-post').deleteMany({
        where: {}
      });
      await app.db.query('api::author.author').deleteMany({
        where: {}
      });
      await app.db.query('api::tag.tag').deleteMany({
        where: {}
      });

      // Create author
      console.log('Creating author...');
      const author = {
        name: 'Dave Thompson',
        bio: 'Senior Security Engineer with 10+ years of experience in cloud security and penetration testing. Regular speaker at cybersecurity conferences and contributor to leading security publications.',
        email: 'dave@cyberedu.com',
        twitter: '@davesecurity',
        linkedin: 'davethompson-security',
        publishedAt: new Date().toISOString()
      };

      const createdAuthor = await app.entityService.create('api::author.author', {
        data: author,
      });
      console.log('Author created:', createdAuthor.id);

      // Create tags
      console.log('Creating tags...');
      const tagNames = [
        'Cloud Security',
        'Penetration Testing',
        'Security Best Practices',
        'Incident Response',
        'Security Architecture',
        'DevSecOps',
        'Threat Hunting',
        'Security Automation',
        'Web Security',
        'API Security',
        'GraphQL',
        'Strapi',
        'LMS',
        'Headless CMS'
      ];

      const createdTags = [];
      for (const tagName of tagNames) {
        const tag = await app.entityService.create('api::tag.tag', {
          data: { 
            name: tagName,
            publishedAt: new Date().toISOString()
          },
        });
        createdTags.push(tag);
        console.log('Tag created:', tag.id, tagName);
      }

      // Create blog posts
      console.log('Creating blog posts...');
      const posts = [
        {
          title: 'Welcome to Our Strapi Demo Site',
          slug: 'welcome-to-strapi-demo',
          excerpt: 'This is a demonstration website built with Strapi CMS, showcasing how to create a modern content management system.',
          content: `
            <h2>About This Demo</h2>
            <p>Welcome to our demonstration website! This site is built using Strapi as the headless CMS, showcasing how to create and manage content effectively. All posts you see here are sample content to help you understand the structure and capabilities of the system.</p>

            <h2>Key Features Demonstrated</h2>
            <ul>
              <li>Content Management with Strapi</li>
              <li>Blog Post Creation and Management</li>
              <li>Tag and Category Organization</li>
              <li>Author Attribution</li>
              <li>SEO Optimization</li>
            </ul>

            <h2>Getting Started</h2>
            <p>To create your own version of this site:</p>
            <ol>
              <li>Clone the repository from GitHub</li>
              <li>Install dependencies</li>
              <li>Configure your environment</li>
              <li>Start creating content!</li>
            </ol>

            <h2>License Information</h2>
            <p>This demo site is free to use for teams of two people or less. For larger teams, please refer to our licensing terms.</p>
          `,
          author: createdAuthor.id,
          tags: [createdTags[2].id, createdTags[5].id],
          readingTime: '5 min read',
          seo: {
            metaTitle: 'Welcome to Our Strapi Demo Site | Content Management Demo',
            metaDescription: 'Explore our Strapi CMS demo site. Learn how to create and manage content with this powerful headless CMS.',
            keywords: ['strapi', 'cms', 'demo', 'content management', 'headless cms'],
            metaRobots: 'index, follow'
          },
          publishedAt: new Date().toISOString()
        },
        {
          title: 'How This Demo Site Was Built',
          slug: 'how-this-demo-was-built',
          excerpt: 'Learn about the technical architecture and implementation details of this Strapi-powered demo website.',
          content: `
            <h2>Technical Overview</h2>
            <p>This demo site demonstrates a modern web architecture using Strapi as the backend CMS. Here's how it's built:</p>

            <h2>Technology Stack</h2>
            <ul>
              <li>Backend: Strapi CMS</li>
              <li>Frontend: React with TypeScript</li>
              <li>Styling: Tailwind CSS</li>
              <li>Database: SQLite (can be upgraded to PostgreSQL)</li>
              <li>Deployment: Can be deployed to any cloud platform</li>
            </ul>

            <h2>Content Structure</h2>
            <p>The site uses several content types:</p>
            <ul>
              <li>Blog Posts (like this one)</li>
              <li>Authors (with profiles)</li>
              <li>Tags (for categorization)</li>
              <li>Comments (for user interaction)</li>
            </ul>

            <h2>Getting Your Own Copy</h2>
            <p>Visit our GitHub repository at https://github.com/dporkka/cyber-edu to get started with your own version. Remember, it's free for small teams!</p>
          `,
          author: createdAuthor.id,
          tags: [createdTags[5].id, createdTags[8].id],
          readingTime: '7 min read',
          seo: {
            metaTitle: 'Building a Demo Site with Strapi | Technical Guide',
            metaDescription: 'Technical deep-dive into how this demo site was built using Strapi CMS, React, and modern web technologies.',
            keywords: ['strapi tutorial', 'cms implementation', 'web development', 'react', 'technical guide'],
            metaRobots: 'index, follow'
          },
          publishedAt: new Date().toISOString()
        },
        {
          title: 'Implementing GraphQL in Your Strapi Application',
          slug: 'implementing-graphql-strapi',
          excerpt: 'Learn how to leverage GraphQL with Strapi to build flexible and efficient APIs for your learning management system.',
          content: `
            <h2>Why GraphQL with Strapi?</h2>
            <p>GraphQL provides a powerful query language for your API, allowing clients to request exactly the data they need. When combined with Strapi's content management capabilities, it creates a flexible and efficient system for delivering content.</p>

            <h2>Setting Up GraphQL in Strapi</h2>
            <p>To add GraphQL to your Strapi application:</p>
            <ol>
              <li>Install the GraphQL plugin:
                <pre><code>npm install @strapi/plugin-graphql</code></pre>
              </li>
              <li>Enable the plugin in your Strapi configuration</li>
              <li>Restart your Strapi server</li>
            </ol>

            <h2>Example Queries</h2>
            <p>Here's how to fetch blog posts with their authors and tags:</p>
            <pre><code>
query {
  blogPosts {
    data {
      attributes {
        title
        content
        author {
          data {
            attributes {
              name
              bio
            }
          }
        }
        tags {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
            </code></pre>

            <h2>Best Practices</h2>
            <ul>
              <li>Use fragments for reusable query parts</li>
              <li>Implement proper error handling</li>
              <li>Consider pagination for large datasets</li>
              <li>Cache frequently requested data</li>
            </ul>

            <h2>Performance Considerations</h2>
            <p>While GraphQL offers great flexibility, it's important to consider:</p>
            <ul>
              <li>Query complexity and depth</li>
              <li>Rate limiting strategies</li>
              <li>Caching mechanisms</li>
              <li>Database query optimization</li>
            </ul>

            <h2>Security</h2>
            <p>Remember to implement proper security measures:</p>
            <ul>
              <li>Authentication and authorization</li>
              <li>Query depth limiting</li>
              <li>Rate limiting</li>
              <li>Input validation</li>
            </ul>
          `,
          author: createdAuthor.id,
          tags: [
            createdTags.find(t => t.name === 'GraphQL').id,
            createdTags.find(t => t.name === 'Strapi').id,
            createdTags.find(t => t.name === 'API Security').id
          ],
          readingTime: '8 min read',
          seo: {
            metaTitle: 'Implementing GraphQL in Strapi | API Development Guide',
            metaDescription: 'Learn how to integrate and use GraphQL with Strapi CMS. Complete guide with examples, best practices, and security considerations.',
            keywords: ['graphql', 'strapi', 'api', 'headless cms', 'web development'],
            metaRobots: 'index, follow'
          },
          publishedAt: new Date().toISOString()
        },
        {
          title: 'Building a Modern LMS with Strapi',
          slug: 'modern-lms-strapi',
          excerpt: 'Discover how to create a full-featured Learning Management System using Strapi as your backend CMS.',
          content: `
            <h2>Why Strapi for LMS?</h2>
            <p>Strapi provides the perfect foundation for building a modern Learning Management System. Its flexible content types, role-based access control, and API-first approach make it ideal for educational platforms.</p>

            <h2>Key Features</h2>
            <ul>
              <li>Course Management</li>
              <li>Student Progress Tracking</li>
              <li>Assessment Tools</li>
              <li>Content Organization</li>
              <li>User Management</li>
            </ul>

            <h2>Implementation Guide</h2>
            <h3>1. Content Structure</h3>
            <p>Design your content types to include:</p>
            <ul>
              <li>Courses</li>
              <li>Lessons</li>
              <li>Quizzes</li>
              <li>Assignments</li>
              <li>Student Profiles</li>
            </ul>

            <h3>2. User Roles</h3>
            <p>Configure different access levels for:</p>
            <ul>
              <li>Administrators</li>
              <li>Instructors</li>
              <li>Students</li>
              <li>Content Managers</li>
            </ul>

            <h3>3. API Integration</h3>
            <p>Utilize Strapi's API to:</p>
            <ul>
              <li>Manage course enrollment</li>
              <li>Track progress</li>
              <li>Handle assessments</li>
              <li>Generate reports</li>
            </ul>

            <h2>Advanced Features</h2>
            <p>Enhance your LMS with:</p>
            <ul>
              <li>Real-time notifications</li>
              <li>Interactive content</li>
              <li>Progress analytics</li>
              <li>Social learning features</li>
            </ul>
          `,
          author: createdAuthor.id,
          tags: [
            createdTags.find(t => t.name === 'LMS').id,
            createdTags.find(t => t.name === 'Strapi').id,
            createdTags.find(t => t.name === 'Headless CMS').id
          ],
          readingTime: '10 min read',
          seo: {
            metaTitle: 'Building a Modern LMS with Strapi | Education Platform Guide',
            metaDescription: 'Learn how to build a complete Learning Management System using Strapi CMS. Includes content structure, user roles, and advanced features.',
            keywords: ['lms', 'strapi', 'education platform', 'learning management', 'course management'],
            metaRobots: 'index, follow'
          },
          publishedAt: new Date().toISOString()
        }
      ];

      for (const post of posts) {
        const createdPost = await app.entityService.create('api::blog-post.blog-post', {
          data: {
            ...post,
            publishedAt: new Date().toISOString(),
            // Make sure the post is published
            published: true
          },
        });
        console.log('Blog post created:', createdPost.id, post.title);

        // Publish the post explicitly
        await app.entityService.update('api::blog-post.blog-post', createdPost.id, {
          data: {
            publishedAt: new Date().toISOString()
          }
        });
      }

      console.log('Seed completed successfully!');
    } catch (error) {
      console.error('Error during seeding:', error);
    }

    // Shutdown Strapi
    await app.destroy();
    process.exit(0);
  } catch (error) {
    console.error('Error initializing Strapi:', error);
    process.exit(1);
  }
}

seedData(); 