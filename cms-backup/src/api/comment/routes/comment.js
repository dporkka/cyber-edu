'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/comments',
      handler: 'comment.find',
    },
    {
      method: 'POST',
      path: '/comments',
      handler: 'comment.create',
    },
  ],
}; 