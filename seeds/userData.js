const { User } = require('../models');

const userdata = [
  {
    username: '',
    email: '',
    password:  ''
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;