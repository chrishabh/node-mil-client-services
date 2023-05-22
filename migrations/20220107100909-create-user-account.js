'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserAccounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING
      },
      account_number: {
        type: Sequelize.STRING
      },
      account_title: {
        type: Sequelize.STRING
      },
      account_manager: {
        type: Sequelize.STRING
      },
      account_manager_code: {
        type: Sequelize.STRING
      },
      account_type: {
        type: Sequelize.STRING
      },
      is_minor: {
        type: Sequelize.ENUM('0', '1')
      },
      jcsd: {
        type: Sequelize.INTEGER
      },
      trn: {
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      is_primary: {
        type: Sequelize.INTEGER
      },
      account_source: {
        type: Sequelize.STRING
      },
      deleted_at: {
        type: Sequelize.DATE
      },
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserAccounts');
  }
};