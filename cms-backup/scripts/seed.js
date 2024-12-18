const fs = require('fs');
const path = require('path');

async function seedData() {
  try {
    console.log('Starting seed process...');
    
    // Initialize Strapi correctly
    const strapiInstance = require('@strapi/strapi');
    const app = await strapiInstance().load();

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
        bio: 'Senior Security Engineer with expertise in cloud security and penetration testing. Regular speaker at cybersecurity conferences and contributor to leading security publications.',
        email: 'dave@cyberedu.com',
        twitter: '@davesecurity',
        linkedin: 'davethompson-security'
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
        'Security Automation'
      ];

      const createdTags = [];
      for (const tagName of tagNames) {
        const tag = await app.entityService.create('api::tag.tag', {
          data: { name: tagName },
        });
        createdTags.push(tag);
        console.log('Tag created:', tag.id, tagName);
      }

      // Create blog posts
      console.log('Creating blog posts...');
      const posts = [
        {
          title: 'Strapi-Driven Learning Management System',
          slug: 'strapi-lms',
          excerpt: 'This website serves as a demonstration of what can be built using Strapi as a headless CMS.',
          content: `
            <h2>About This Demo</h2>
            <p>This is a demonstration website showcasing how Strapi can be used to build a modern learning management system. The platform is open-source and available for teams of up to two people to use freely.</p>

            <h2>Key Features</h2>
            <ul>
              <li>Content Management with Strapi</li>
              <li>React Frontend</li>
              <li>SEO Optimization</li>
              <li>User Authentication</li>
              <li>Role-based Access Control</li>
            </ul>

            <h2>Licensing</h2>
            <p>This platform is free for teams of two or fewer people. Commercial use by larger teams requires a license. Visit our GitHub repository for more information: <a href="https://github.com/dporkka/cyber-edu">https://github.com/dporkka/cyber-edu</a></p>
          `,
          author: createdAuthor.id,
          tags: [createdTags[2].id, createdTags[5].id],
          readingTime: '5 min read',
          seo: {
            metaTitle: 'Strapi-Driven LMS Demo | Open Source Learning Platform',
            metaDescription: 'Explore our open-source learning management system built with Strapi CMS. Free for small teams, perfect for educational content.',
            keywords: JSON.stringify([
              'strapi',
              'lms',
              'learning management',
              'open source',
              'education platform'
            ]),
            metaRobots: 'index, follow'
          },
          publishedAt: new Date().toISOString()
        }
      ];

      for (const post of posts) {
        const createdPost = await app.entityService.create('api::blog-post.blog-post', {
          data: post,
        });
        console.log('Blog post created:', createdPost.id, post.title);
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