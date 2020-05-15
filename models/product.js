'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    producer_id: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.Producer,{
      foreignKey: 'producer_id'
    })
  };
  return Product;
};
