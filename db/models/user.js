'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
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