'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Role,{
      foreignKey: 'role_id'
    })
  };
  return User;
};
