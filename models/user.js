"use strict";
const { Model, DataTypes } = require("sequelize");
class Users extends Model {}
Users.init(
   {
      pseudo: { type: DataTypes.STRING, allowNull: false },
      score: { type: DataTypes.INTEGER, allowNull: false },
      isLogged: { type: DataTypes.BOOLEAN, allowNull: false }
   },
   { sequelize: require("../db/connect") }
);

module.exports = Users;
