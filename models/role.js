'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
   Role.hasMany(models.User, {
      foreignKey: 'role_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      sourceKey: 'id'
    })
  };
  return Role;
};
