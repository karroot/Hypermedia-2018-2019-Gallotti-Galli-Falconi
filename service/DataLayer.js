const sqlDbFactory = require("knex");

let { booksDbSetup } = require("./BookService");
let { similarbooksDbSetup } = require("./BookService");
let { authorsDbSetup } = require("./AuthorService");
let { eventsDbSetup } = require("./EventsService");
let { reviewsDbSetup } = require("./ReviewService");
let { usersDbSetup } = require("./UserService");
let { cartsDbSetup } = require("./CartService");
let { cartsdetailDbSetup} = require("./CartService");
let { ebooksDbSetup } = require("./EbookService");

let{themeDbSetup}= require("./ThemeService");
let{genreDbSetup}= require("./GenreService");
let sqlDb = sqlDbFactory({
  client: "pg",
  connection: "postgres://zukqofzuebtodv:9504c45261593bad18faa162159c97396532fb3f04a42a2df71901fe02358544@ec2-23-21-148-223.compute-1.amazonaws.com:5432/d4vs02g9lbjm5s?ssl=true",
  ssl: true,
  debug: true
});

function setupDataLayer() {
  console.log("Setting up data layer");
  return booksDbSetup(sqlDb),authorsDbSetup(sqlDb),eventsDbSetup(sqlDb),reviewsDbSetup(sqlDb),usersDbSetup(sqlDb),cartsDbSetup(sqlDb),ebooksDbSetup(sqlDb)
  ,similarbooksDbSetup(sqlDb),cartsdetailDbSetup(sqlDb),themeDbSetup(sqlDb),genreDbSetup(sqlDb);
  
}

module.exports = { database: sqlDb, setupDataLayer };

