module.exports = {
   path: "/scores",
   method: "GET",
   handler: (request, h) => {
      return "/scores";
   },
   options: {
      description: "Scores",
      notes: "Return the collection of users scores",
      tags: ["api"] // ADD THIS TAG
   }
};
