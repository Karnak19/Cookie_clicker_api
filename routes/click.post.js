const User = require("../models/user");
const sequelize = require("sequelize");
const Joi = require("joi");

module.exports = {
   path: "/{id}/click",
   method: "POST",
   handler: (request, h) => {
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
      notes: "Increment the user score",
      tags: ["api"],
      validate: {
         params: {
            id: Joi.number()
         }
      }
   }
};
