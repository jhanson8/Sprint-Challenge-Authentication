const db = require("../database/dbConfig.js");

module.exports = {
  all
};

function all() {
  return db("jokes");
}
