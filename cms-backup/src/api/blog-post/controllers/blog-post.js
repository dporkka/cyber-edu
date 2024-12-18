'use strict';

module.exports = {
  async find(ctx) {
    const { query } = ctx;
    
    // Add pagination
    const page = parseInt(query.page) || 1;
    const pageSize = parseInt(query.pageSize) || 10;
    
    // Add search
    const searchQuery = query.search ? {
      $or: [
        { title: { $containsi: query.search } },
        { excerpt: { $containsi: query.search } },
      ]
    } : {};
    
    // Add tag filtering
    const tagFilter = query.tag ? {
      tags: {
        name: query.tag
      }
    } : {};

    const filters = {
      ...searchQuery,
      ...tagFilter,
    };

    const [entries, count] = await Promise.all([
      strapi.entityService.findMany('api::blog-post.blog-post', {
        filters,
        populate: ['author', 'tags', 'coverImage', 'seo'],
        start: (page - 1) * pageSize,
        limit: pageSize,
        sort: { publishedAt: 'desc' },
      }),
      strapi.entityService.count('api::blog-post.blog-post', {
        filters,
      }),
    ]);

    return {
      data: entries,
      meta: {
        pagination: {
          page,
          pageSize,
          pageCount: Math.ceil(count / pageSize),
          total: count,
        },
      },
    };
  },

  async findOne(ctx) {
    const { slug } = ctx.params;
    
    const entry = await strapi.entityService.findMany('api::blog-post.blog-post', {
      filters: { slug },
      populate: ['author', 'tags', 'coverImage', 'seo'],
    });

    if (!entry.length) {
      return ctx.notFound('Post not found');
    }

    // Parse JSON fields
    const post = entry[0];
    if (post.seo) {
      try {
        // Parse keywords if they're stored as a string
        if (typeof post.seo.keywords === 'string') {
          post.seo.keywords = JSON.parse(post.seo.keywords);
        }
        // Parse structured data if it exists
        if (post.seo.structuredData && typeof post.seo.structuredData === 'string') {
          post.seo.structuredData = JSON.parse(post.seo.structuredData);
        }
      } catch (error) {
        console.error('Error parsing SEO JSON:', error);
      }
    }

    return {
      data: post
    };
  },
}; 