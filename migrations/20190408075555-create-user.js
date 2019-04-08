"use strict";
module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("Users", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
         },
         pseudo: {
            allowNull: false,
            type: Sequelize.STRING
         },
         score: {
            allowNull: true,
            type: Sequelize.INTEGER
         },
         isLogged: {
            allowNull: false,
            type: Sequelize.BOOLEAN
         },
         createdAt: {
            allowNull: true,
            type: Sequelize.DATE
         },
         updatedAt: {
            allowNull: true,
            type: Sequelize.DATE
         }
      });
   },
   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("Users");
   }
};
