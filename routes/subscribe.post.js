module.exports = {
   path: "/subscribe",
   method: "POST",
   handler: (request, h) => {
      return "/subscribe bayb";
   },
   options: {
      description: "Subscribing",
      notes: "Post a pseudo then return an unique ID",
      tags: ["api"] // ADD THIS TAG
   }
};
