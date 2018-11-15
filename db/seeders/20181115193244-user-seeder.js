'use strict';
const { encrypt } = require("../../helpers/authentication/encrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Users", [
      { username: "Will", password: encrypt(123), createdAt: new Date(), updatedAt: new Date()},
      { username: "Boomkeisha", password: encrypt(555), createdAt: new Date(), updatedAt: new Date()},
      { username: "Tammy", password: encrypt(444), createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Users", null, {});
  }
};
