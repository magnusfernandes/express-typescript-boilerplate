'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('kiosks', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      device_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'devices',
          key: 'id'
        }
      },
      pin: {
        allowNull: false,
        type: Sequelize.STRING
      },
      location_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'locations',
          key: 'id'
        }
      },
      kiosk_form_id: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: 'kiosk_forms',
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
    return queryInterface.dropTable('kiosks');
  }
};