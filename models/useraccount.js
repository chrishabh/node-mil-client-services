'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserAccount.init({
    user_id: DataTypes.STRING,
    account_number: DataTypes.STRING,
    account_title: DataTypes.STRING,
    account_manager: DataTypes.STRING,
    account_manager_code: DataTypes.STRING,
    account_type: DataTypes.STRING,
    is_minor: DataTypes.ENUM('0', '1'),
    jcsd: DataTypes.INTEGER,
    trn: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.TEXT,
    is_primary: DataTypes.INTEGER,
    account_source: DataTypes.STRING,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'UserAccount',
  });
  return UserAccount;
};