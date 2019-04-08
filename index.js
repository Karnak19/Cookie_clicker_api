require("dotenv").config();
const Hapi = require("hapi");
const Inert = require("inert");
const Vision = require("vision");
const HapiSwagger = require("hapi-swagger");
const Pack = require("./package");
const env = process.env.NODE_ENV || "development";
const Sequelize = require("sequelize");
const config = require(__dirname + "/config/config.json")[env];

(async () => {
   const server = await new Hapi.Server({
      host: process.env.HOST || "localhost",
      port: process.env.PORT || 3000
   });

   const swaggerOptions = {
      info: {
         title: "Cookie Clicker API",
         version: Pack.version
      }
   };

   await server.register([
      Inert,
      Vision,
      {
         plugin: HapiSwagger,
         options: swaggerOptions
      },
      {
         plugin: require("hapi-sequelizejs"),
         options: [
            {
               name: "database_development_c_clicker", // identifier
               models: [__dirname + "/models/*.js"], // paths/globs to model files
               sequelize: new Sequelize(config), // sequelize instance
               sync: true, // sync models - default false
               forceSync: false // force sync (drops tables) - default false
            }
         ]
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
