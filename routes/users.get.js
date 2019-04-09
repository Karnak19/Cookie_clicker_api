const User = require("../models/user");
const Joi = require("joi");

module.exports = {
   path: "/users/{id}",
   method: "GET",
   handler: (request, h) => {
      return User.findAll({
         where: {
            id: request.params.id
         }
      });
   },
   options: {
      description: "One User",
      notes: "Return an User",
      tags: ["api"],
      validate: {
         params: {
            id: Joi.number()
         }
      }
   }
};
