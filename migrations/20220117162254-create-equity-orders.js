'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EquityOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      account_number: {
        type: Sequelize.INTEGER
      },
      portfolio_number: {
        type: Sequelize.INTEGER
      },
      order_status: {
        type: Sequelize.ENUM('NEW', 'VERIFIED', 'CHECKED', 'APPROVED', 'SUBMITTED', 'PROCESSED')
      },
      unique_id: {
        type: Sequelize.STRING
      },
      process_started: {
        type: Sequelize.STRING
      },
      unibanx_order_id: {
        type: Sequelize.STRING
      },
      action: {
        type: Sequelize.ENUM('buy', 'sell')
      },
      stock_symbol: {
        type: Sequelize.STRING
      },
      market_classification: {
        type: Sequelize.STRING
      },
      transaction_currency: {
        type: Sequelize.STRING
      },
      jmd_equivalent: {
        type: Sequelize.DOUBLE
      },
      order_type: {
        type: Sequelize.ENUM('limit', 'market')
      },
      price: {
        type: Sequelize.DOUBLE
      },
      quantity: {
        type: Sequelize.BIGINT
      },
      amount: {
        type: Sequelize.DOUBLE
      },
      order_date: {
        type: Sequelize.DATE
      },
      save_order_date: {
        type: Sequelize.DATE
      },
      expire_type: {
        type: Sequelize.STRING
      },
      broker_fee: {
        type: Sequelize.STRING
      },
      jse_fee: {
        type: Sequelize.DOUBLE
      },
      jcsd_fee: {
        type: Sequelize.DOUBLE
      },
      gct_fee: {
        type: Sequelize.DOUBLE
      },
      total_payable: {
        type: Sequelize.DOUBLE
      },
      broker_fee_calculation: {
        type: Sequelize.DOUBLE
      },
      jse_fee_calculation: {
        type: Sequelize.DOUBLE
      },
      jcsd_fee_calculation: {
        type: Sequelize.DOUBLE
      },
      gct_fee_calculation: {
        type: Sequelize.DOUBLE
      },
      expire_date: {
        type: Sequelize.DATE
      },
      expire_at: {
        type: Sequelize.DATE
      },
      placed_by: {
        type: Sequelize.ENUM('customer', 'worker')
      },
      verified_by: {
        type: Sequelize.STRING
      },
      processed_percentage: {
        type: Sequelize.INTEGER
      },
      verified_at: {
        type: Sequelize.DATE
      },
      checked_by: {
        type: Sequelize.STRING
      },
      checked_at: {
        type: Sequelize.DATE
      },
      approved_by: {
        type: Sequelize.STRING
      },
      approved_at: {
        type: Sequelize.DATE
      },
      start_process_by: {
        type: Sequelize.STRING
      },
      start_process_at: {
        type: Sequelize.DATE
      },
      processed_by: {
        type: Sequelize.STRING
      },
      processed_at: {
        type: Sequelize.DATE
      },
      rejected_by: {
        type: Sequelize.STRING
      },
      rejected_at: {
        type: Sequelize.DATE
      },
      cancelled_by: {
        type: Sequelize.STRING
      },
      cancelled_at: {
        type: Sequelize.DATE
      },
      fee_updated_by: {
        type: Sequelize.STRING
      },
      fee_updated_at: {
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_by: {
        type: Sequelize.STRING
      },
      updated_at: {
        type: Sequelize.DATE
      },
      agreement_first: {
        type: Sequelize.ENUM('0', '1')
      },
      agreement_second: {
        type: Sequelize.ENUM('0', '1')
      },
      expired_flag: {
        type: Sequelize.INTEGER
      },
      exported_by: {
        type: Sequelize.STRING
      },
      exported_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EquityOrders');
  }
};