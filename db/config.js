module.exports = {
   local: {
      username: "basile",
      password: "pass",
      database: "database_development_c_clicker",
      host: "127.0.0.1",
      dialect: "postgres"
   }
}[process.env.NODE_ENV || "local"];
