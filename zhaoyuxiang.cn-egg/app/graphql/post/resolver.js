'use strict';
module.exports = {
  Query: {
    post(root, { id }, ctx) {
      return ctx.connector.post.fetchById(id);
    },

    posts(root, { page = 1 }, ctx) {
      return ctx.connector.post.fetchList(page);
    }
  },

  Mutation: {
    createPost(root, {
      title,
      content
    }, ctx) {
      return ctx.connector.post.create(title, content);
    },

    deletePost(root, { id }, ctx) {
      return ctx.connector.post.delete(id);
    }
  }
};