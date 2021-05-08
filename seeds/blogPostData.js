const { BlogPost } = require('../models');

const blogpostdata = [
  {
    title: '',
    author_id: 1,
    post_body:
      '',
  },
];

const seedBlog = () => BlogPost.bulkCreate(blogpostdata);

module.exports = seedBlog;