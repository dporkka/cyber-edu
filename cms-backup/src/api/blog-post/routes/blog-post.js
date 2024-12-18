module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/blog-posts',
      handler: 'blog-post.find',
    },
    {
      method: 'GET',
      path: '/blog-posts/:slug',
      handler: 'blog-post.findOne',
    },
  ],
}; 