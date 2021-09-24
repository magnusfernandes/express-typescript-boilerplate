'use strict';

const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Magnus Fernandes',
          email: 'magnusfernandes1295@gmail.com',
          phone: '+918669076411',
          role: 'superadmin',
          profilePic: 'https://i.pravatar.cc/150?img=1',
          passwordHash: bcrypt.hashSync('changeme', 10),
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          name: 'Dwayne Rock',
          email: 'dwayne@rock.com',
          phone: '+919890354824',
          role: 'end_user',
          profilePic: 'https://i.pravatar.cc/150?img=4',
          passwordHash: bcrypt.hashSync('changeme', 10),
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          name: 'Tom Hanks',
          email: 'hanks@tom.com',
          phone: '+919158791189',
          role: 'manager',
          profilePic: 'https://i.pravatar.cc/150?img=5',
          passwordHash: bcrypt.hashSync('changeme', 10),
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
