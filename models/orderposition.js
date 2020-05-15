'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderPosition = sequelize.define('OrderPosition', {
    count: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});
  OrderPosition.associate = function(models) {
    OrderPosition.belongsTo(models.Order,{
      foreignKey: 'order_id',
      targetKey: 'id'
    })

    OrderPosition.belongsTo(models.Product,{
      foreignKey: 'product_id'
    })
  };
  return OrderPosition;
};
