"use strict";
module.exports = (sequelize, DataTypes) => {
   class Users extends sequelize.Model {}
   Users.init(
      {
         pseudo: { type: DataTypes.STRING, allowNull: false },
         score: { type: DataTypes.INTEGER, allowNull: false },
         isLogged: { type: DataTypes.BOOLEAN, allowNull: false }
      },
      { sequelize }
   );
   return Users;
};
