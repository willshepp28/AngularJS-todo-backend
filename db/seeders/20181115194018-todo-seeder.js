'use strict';

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

   return queryInterface.bulkInsert("Todos", [
    {  activity: "Clean the room", complete: false, userId: 1, createdAt: new Date(), updatedAt: new Date()},
    {  activity: "Wash Car", complete: false, userId: 1, createdAt: new Date(), updatedAt: new Date()},
    {  activity: "Walk the dog", complete: true, userId: 1, createdAt: new Date(), updatedAt: new Date()},
    {  activity: "Find a Job", complete: true, userId: 1, createdAt: new Date(), updatedAt: new Date()},
    {  activity: "Love life", complete: true, userId: 1, createdAt: new Date(), updatedAt: new Date()},
    {  activity: "Meet new people", complete: false, userId: 1, createdAt: new Date(), updatedAt: new Date()},
    {  activity: "Read 1 new book", complete: false, userId: 1, createdAt: new Date(), updatedAt: new Date()},
    {  activity: "Think about how you want the next 10 years to be.", complete: false, userId: 1, createdAt: new Date(), updatedAt: new Date()},
    {  activity: "Call Mother", complete: false, userId: 1, createdAt: new Date(), updatedAt: new Date()},
    {  activity: "Learn Chess", complete: false, userId: 1, createdAt: new Date(), updatedAt: new Date()},
    {  activity: "Go to the gym", complete: false, userId: 1, createdAt: new Date(), updatedAt: new Date()},
   
  ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Todos", null, {});
  }
};
