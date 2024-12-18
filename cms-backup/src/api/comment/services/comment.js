'use strict';

module.exports = {
  async findByPost(postId, populate = []) {
    return strapi.entityService.findMany('api::comment.comment', {
      filters: { post: postId },
      populate,
      sort: { createdAt: 'desc' },
    });
  },

  async createComment(data) {
    return strapi.entityService.create('api::comment.comment', {
      data,
      populate: ['author'],
    });
  },
}; 