'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    activity: DataTypes.TEXT,
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    userId: DataTypes.INTEGER
  }, {
      classMethods: {
        associate: function (models) {
          Todo.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
          });
        }
      }
    });

  return Todo;
};