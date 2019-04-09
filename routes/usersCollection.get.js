const User = require("../models/user");

module.exports = {
   path: "/users",
   method: "GET",
   handler: (request, h) => {
      return User.findAll();
   },
   options: {
      description: "All Users",
      notes: "Return the collection of users",
      tags: ["api"] // ADD THIS TAG
   }
};
