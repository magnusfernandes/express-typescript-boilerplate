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
          phone: '+919637078086',
          role: 'superadmin',
          profile_pic: 'https://i.pravatar.cc/150?img=1',
          password_hash: bcrypt.hashSync('changeme', 10),
          created_at: Sequelize.literal('NOW()'),
          updated_at: Sequelize.literal('NOW()')
        },
        {
          name: 'Dwayne Rock',
          email: 'dwayne@rock.com',
          phone: '+919890354824',
          role: 'end_user',
          profile_pic: 'https://i.pravatar.cc/150?img=4',
          password_hash: bcrypt.hashSync('changeme', 10),
          created_at: Sequelize.literal('NOW()'),
          updated_at: Sequelize.literal('NOW()')
        },
        {
          name: 'Tom Hanks',
          email: 'hanks@tom.com',
          phone: '+919158791189',
          role: 'end_user',
          profile_pic: 'https://i.pravatar.cc/150?img=5',
          password_hash: bcrypt.hashSync('changeme', 10),
          created_at: Sequelize.literal('NOW()'),
          updated_at: Sequelize.literal('NOW()')
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
