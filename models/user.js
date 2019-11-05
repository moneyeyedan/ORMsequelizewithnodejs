'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Context, {
      foreignKey: 'UserId',
    onDelete: 'CASCADE'
    });
  };
  return User;
};