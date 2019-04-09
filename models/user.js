"use strict";
const { Model, DataTypes } = require("sequelize");
class Users extends Model {}
Users.init(
   {
      pseudo: { type: DataTypes.STRING, allowNull: false },
      score: { type: DataTypes.INTEGER, defaultValue: 0 },
      isLogged: { type: DataTypes.BOOLEAN, defaultValue: false }
   },
   { sequelize: require("../db/connect") }
);

module.exports = Users;
