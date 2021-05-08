const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost, {
  foreignKey: 'author_id',
});

BlogPost.belongsTo(User, {
  foreignKey: 'author_id',
});

BlogPost.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'post_id',
});

User.hasMany(Comment, {
  foreignKey: 'author_id',
});

Comment.belongsTo(User, {
  foreignKey: 'author_id',
});

module.exports = { User, BlogPost, Comment };