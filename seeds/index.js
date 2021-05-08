const sequelize = require('../config/connection');
const seedBlog = require('./blogPostData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlog();

  process.exit(0);
};

seedAll();