module.exports = {
   path: "/users",
   method: "GET",
   handler: (request, h) => {
      return "Get users";
   },
   options: {
      description: "Scores",
      notes: "Return the collection of users scores",
      tags: ["api"] // ADD THIS TAG
   }
};
