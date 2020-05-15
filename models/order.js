'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    number: DataTypes.STRING,
    order_date: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User,{
      foreignKey: 'user_id',
      targetKey: 'id'
    })
    Order.hasMany(models.OrderPosition, {
      foreignKey: 'order_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      sourceKey: 'id'
    })
  };
  return Order;
};
