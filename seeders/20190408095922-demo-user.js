"use strict";

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
         "Users",
         [
            {
               pseudo: "Baz",
               score: 0,
               isLogged: false
            }
         ],
         {}
      );
   },

   down: (queryInterface, Sequelize) => {
      /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   }
};
