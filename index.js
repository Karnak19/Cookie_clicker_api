require("dotenv").config();
const Hapi = require("hapi");
const Inert = require("inert");
const Vision = require("vision");
const HapiSwagger = require("hapi-swagger");
const Pack = require("./package");

(async () => {
   const server = await new Hapi.Server({
      host: process.env.HOST || "localhost",
      port: process.env.PORT || 3000
   });

   const swaggerOptions = {
      info: {
         title: "Cookie Clicker API",
         description: "API du Cookie Clicker, Project 2 Wild Code School Bidart Février 2019",
         version: Pack.version
      }
   };

   await server.register([
      Inert,
      Vision,
      {
         plugin: HapiSwagger,
         options: swaggerOptions
      }
   ]);

   try {
      await server.start();
      console.log("Server running at:", server.info.uri);
   } catch (err) {
      console.log(err);
   }

   server.route(require("./routes"));

   process.on("unhandledRejection", err => {
      console.log(err);
      process.exit(1);
   });
})();
