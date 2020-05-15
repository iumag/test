'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producer = sequelize.define('Producer', {
    name: DataTypes.STRING
  }, {});
  Producer.associate = function(models) {
    Producer.hasMany(models.Product, {
      foreignKey: 'role_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      sourceKey: 'id'
    })
  };
  return Producer;
};
