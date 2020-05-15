'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    number: DataTypes.STRING,
    order_date: DataTypes.DATE
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};