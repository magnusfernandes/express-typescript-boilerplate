'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userOtps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      userId: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING
      },
      retries: Sequelize.INTEGER,
      sentAt: Sequelize.DATE,
      usedAt: Sequelize.DATE,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userOtps');
  }
};