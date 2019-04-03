module.exports = {
   path: "/{id}/click",
   method: "POST",
   handler: (request, h) => {
      return "/id/click bayb";
   },
   options: {
      description: "Clicking",
      notes: "Posting a click to the user score",
      tags: ["api"] // ADD THIS TAG
   }
};
