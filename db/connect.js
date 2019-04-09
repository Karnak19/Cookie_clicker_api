const Sequelize = require("sequelize");
const cfg = require("./config");

const sequelize = new Sequelize(cfg);
sequelize.sync();

module.exports = sequelize;
