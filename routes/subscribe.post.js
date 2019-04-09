const User = require("../models/user");
const Joi = require("joi");

module.exports = {
   path: "/users/subscribe",
   method: "POST",
   handler: (request, h) => {
      return User.create(request.payload);
   },
   options: {
      description: "Subscribing",
      notes: "Post a pseudo then return an unique ID",
      tags: ["api"], // ADD THIS ,
      validate: {
         payload: Joi.object({
            pseudo: Joi.string()
               .alphanum()
               .min(5)
               .max(20)
         })
      }
   }
};
