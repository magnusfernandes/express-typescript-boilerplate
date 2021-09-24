'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('locations', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      organisation_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'organisations',
          key: 'id'
        }
      },
      address_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'addresses',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('locations');
  }
};