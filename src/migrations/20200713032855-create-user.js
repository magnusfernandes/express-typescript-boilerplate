'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => {
      return queryInterface.createTable('users', {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          unique: true,
          type: Sequelize.STRING
        },
        role: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: 'end_user'
        },
        profile_pic: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        gender: Sequelize.STRING,
        birth_date: Sequelize.DATE,
        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};