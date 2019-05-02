const sqlDbFactory = require("knex");

let { booksDbSetup } = require("./BookService");

let sqlDb = sqlDbFactory({
  client: "pg",
  connection: "postgres://nsgcqefizlkqet:2a74a9cca95e794f9baaa32eb449872ab85e8ad6d083ff1aa746a4f10d322d50@ec2-54-243-197-120.compute-1.amazonaws.com:5432/d61p52kthlqep8?ssl=true",
  ssl: true,
  debug: true
});

function setupDataLayer() {
  console.log("Setting up data layer");
  return booksDbSetup(sqlDb);
}

module.exports = { database: sqlDb, setupDataLayer };

exports.booksGET = function(offset, limit) {
  return sqlDb("books")
    .then(data => {
      return data
    });
};