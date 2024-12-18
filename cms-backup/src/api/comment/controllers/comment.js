'use strict';

module.exports = {
  async find(ctx) {
    const { query } = ctx;
    
    try {
      const comments = await strapi.service('api::comment.comment').findByPost(
        query.postId,
        ['author']
      );

      return { data: comments };
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async create(ctx) {
    const { user } = ctx.state;
    const { content, postId } = ctx.request.body;

    try {
      if (!user) {
        return ctx.unauthorized('You must be logged in to comment');
      }

      const comment = await strapi.service('api::comment.comment').createComment({
        content,
        author: user.id,
        post: postId,
      });

      return { data: comment };
    } catch (error) {
      ctx.throw(500, error);
    }
  },
}; 