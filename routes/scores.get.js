module.exports = {
   path: "/scores",
   method: "GET",
   handler: (request, h) => {
      return "Hello World";
   },
   options: {
      description: "Scores",
      notes: "Return the collection of users scores",
      tags: ["api"] // ADD THIS TAG
   }
};
