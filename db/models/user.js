'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.TEXT,
    password: DataTypes.TEXT
  }, {
      classMethods: {
        associate: function (models) {
          User.hasMany(models.Todo, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
          });
        }
      }
    });

  return User;
};