const User = require("../models/user");
const sequelize = require("sequelize");
const Joi = require("joi");

module.exports = {
   path: "/{id}/click",
   method: "POST",
   handler: (request, h) => {
      const payload = request.payload;
      return User.update(
         {
            score: sequelize.literal("score+1")
         },

         {
            where: {
               id: request.params.id
            }
         }
      );
   },
   options: {
      description: "Scores",
      notes: "Return the collection of users scores",
      tags: ["api"],
      validate: {
         params: {
            id: Joi.number()
         }
      }
   }
};
