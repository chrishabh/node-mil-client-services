'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EquityOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EquityOrders.init({
    user_id: DataTypes.INTEGER,
    account_number: DataTypes.INTEGER,
    portfolio_number: DataTypes.INTEGER,
    order_status: DataTypes.ENUM('NEW', 'VERIFIED', 'CHECKED', 'APPROVED', 'SUBMITTED', 'PROCESSED'),
    unique_id: DataTypes.STRING,
    process_started: DataTypes.STRING,
    unibanx_order_id: DataTypes.STRING,
    action: DataTypes.ENUM('buy', 'sell'),
    stock_symbol: DataTypes.STRING,
    market_classification: DataTypes.STRING,
    transaction_currency: DataTypes.STRING,
    jmd_equivalent: DataTypes.DOUBLE,
    order_type: DataTypes.ENUM('limit', 'market'),
    price: DataTypes.DOUBLE,
    quantity: DataTypes.BIGINT,
    amount: DataTypes.DOUBLE,
    order_date: DataTypes.DATE,
    save_order_date: DataTypes.DATE,
    expire_type: DataTypes.STRING,
    broker_fee: DataTypes.STRING,
    jse_fee: DataTypes.DOUBLE,
    jcsd_fee: DataTypes.DOUBLE,
    gct_fee: DataTypes.DOUBLE,
    total_payable: DataTypes.DOUBLE,
    broker_fee_calculation: DataTypes.DOUBLE,
    jse_fee_calculation: DataTypes.DOUBLE,
    jcsd_fee_calculation: DataTypes.DOUBLE,
    gct_fee_calculation: DataTypes.DOUBLE,
    expire_date: DataTypes.DATE,
    expire_at: DataTypes.DATE,
    placed_by: DataTypes.ENUM('customer', 'worker'),
    verified_by: DataTypes.STRING,
    processed_percentage: DataTypes.INTEGER,
    verified_at: DataTypes.DATE,
    checked_by: DataTypes.STRING,
    checked_at: DataTypes.DATE,
    approved_by: DataTypes.STRING,
    approved_at: DataTypes.DATE,
    start_process_by: DataTypes.STRING,
    start_process_at: DataTypes.DATE,
    processed_by: DataTypes.STRING,
    processed_at: DataTypes.DATE,
    rejected_by: DataTypes.STRING,
    rejected_at: DataTypes.DATE,
    cancelled_by: DataTypes.STRING,
    cancelled_at: DataTypes.DATE,
    fee_updated_by: DataTypes.STRING,
    fee_updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
    created_by: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.STRING,
    updated_at: DataTypes.DATE,
    agreement_first: DataTypes.ENUM('0', '1'),
    agreement_second: DataTypes.ENUM('0', '1'),
    expired_flag: DataTypes.INTEGER,
    exported_by: DataTypes.STRING,
    exported_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'EquityOrders',
  });
  return EquityOrders;
};