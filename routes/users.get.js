const User = require("../models/user");

module.exports = {
   path: "/users",
   method: "GET",
   handler: (request, h) => {
      return User.findAll();
   },
   options: {
      description: "Scores",
      notes: "Return the collection of users scores",
      tags: ["api"] // ADD THIS TAG
   }
};
