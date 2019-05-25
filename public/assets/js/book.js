var GENRE_FILTER = "";
var THEME_FILTER = "";
var EBOOK_FILTER = "";

function getBooks() {
       getParam();
       if(EBOOK_FILTER != "") geteBook();
       else getAll();
};

function getParam() {
       GENRE_FILTER = sessionStorage.getItem("GENRE_FILTER");
       THEME_FILTER = sessionStorage.getItem("THEME_FILTER");
       EBOOK_FILTER = sessionStorage.getItem("EBOOK_FILTER");
}

function getAll() {
       $("#book-title")[0].innerHTML = "<h1>Books</h1>";
       if(GENRE_FILTER == "" && THEME_FILTER == "") {
              fetch('/v2/book').then(function(response) {
                     return response.json();
              }).then(parseData)
       } else if(GENRE_FILTER == "") {
              fetch(`/v2/theme/${THEME_FILTER}/book`).then(function(response) {
                     return response.json();
              }).then(parseData)
       } else if(THEME_FILTER == ""){
              fetch(`/v2/genre/${GENRE_FILTER}/book`).then(function(response) {
                     return response.json();
              }).then(parseData)
       } else {
              fetch(`/v2/theme/${THEME_FILTER}/book`).then(function(response) {
                     return response.json();
              }).then(filterBook)
       };
}

/* function geteBook() {
       if(GENRE_FILTER == "" && THEME_FILTER == "") {
              fetch('/v2/ebook').then(function(response) {
                     return response.json();
              }).then(parseData)
       } else if(GENRE_FILTER == "") {
              fetch(`/v2/theme/${THEME_FILTER}/book`).then(function(response) {
                     return response.json();
              }).then(filtereBook)
       } else if(THEME_FILTER == ""){
              fetch(`/v2/genre/${GENRE_FILTER}/book`).then(function(response) {
                     return response.json();
              }).then(filtereBook)
       } else {
              fetch(`/v2/theme/${THEME_FILTER}/book`).then(function(response) {
                     return response.json();
              }).then(filtereBook)
       };
} */

function filterBook(book) {
      book = book.filter(b => b.genre==GENRE_FILTER);
       parseData(book);
}

/* function filtereBook(book) {
       if(GENRE_FILTER != "" && THEME_FILTER != "") book = book.filter(b => b.genre==GENRE_FILTER);
       book = book.filter(b => b.ebook==true);
       parseData(book);
} */

function geteBook() {
       $("#book-title")[0].innerHTML = "<h1>eBooks</h1>";
       fetch('/v2/ebook').then(function(response) {
              return response.json();
       }).then(filtereBook);
}

function filtereBook(eBook) {
       if(GENRE_FILTER != "") eBook = eBook.filter(b => b.genre==GENRE_FILTER);
       if(THEME_FILTER != "") eBook = eBook.filter(b => b.theme==THEME_FILTER);
       parseData(eBook);
}

function getBestSeller() {
       fetch('/v2/book').then(function(response) {
              return response.json();
       }).then(filterBest)
}

function filterBest(book) {
       book = book.filter(b => b.BestSeller=='true');
       parseData(book);
}

function parseData(book) {
       $("#book1").html("");
       $("#book2").html("");

       if(!book.length) emptyData();

       templateFormatter();

       $(".bookCard1-template-container").loadTemplate("#template", book.slice(book.length/2, book.length), {
              append: true
       });
       $(".bookCard2-template-container").loadTemplate("#template", book.slice(0, book.length/2), {
              append: true
       });

}

function getBookById() {
       let book_id = parseQueryString(location.search).id;
       if (!book_id) location.replace("/pages/books.html");
       fetch(`/v2/book/${book_id}`).then(function(response) {
              return response.json();
      }).then(parseBookData)   
}

function parseBookData(book) {
       
}

function getOption() {
       populateFormatOptions();
       fetch('/v2/theme').then(function(response) {
              return response.json();
      }).then(populateThemeOptions)
      fetch('/v2/genre').then(function(response) {
              return response.json();
       }).then(populateGenreOptions);
}


function populateGenreOptions(genre) {
       let html = "<option id=''>All genres</option>";
       genre.forEach(g => {
              if(GENRE_FILTER == g.genre) html += `<option id='${g.genre}' selected>${g.genre}</option>`;
              else html += `<option id='${g.genre}'>${g.genre}</option>`
       });
       $("#book-genre")[0].innerHTML = html;
}

function populateThemeOptions(theme) {
       let html =  "<option id=''>All themes</option>";;
       theme.forEach(t => {
              if(THEME_FILTER == t.theme) html += `<option id='${t.theme}' selected>${t.theme}</option>`;
              else html += `<option id='${t.theme}'>${t.theme}</option>`;
       });
       $("#book-theme")[0].innerHTML = html;
}

function populateFormatOptions() {
      EBOOK_FILTER = sessionStorage.getItem("EBOOK_FILTER");
      let html = "<option id=''>All formats</option>";
      if(EBOOK_FILTER != "") html += `<option id='eBook' selected>eBook</option>`;
      else html += "<option id='eBook'>eBook</option>";
       $("#book-format")[0].innerHTML = html;
}

function handleChange(e) {
       let selectorGenre = $("#book-genre")[0];
       let GENRE_FILTER = selectorGenre.options[selectorGenre.selectedIndex].id;
       sessionStorage.setItem("GENRE_FILTER", GENRE_FILTER); 
       let selectorTheme = $("#book-theme")[0];
       let THEME_FILTER = selectorTheme.options[selectorTheme.selectedIndex].id;
       sessionStorage.setItem("THEME_FILTER", THEME_FILTER); 
       let selectorFormat = $("#book-format")[0];
       let EBOOK_FILTER = selectorFormat.options[selectorFormat.selectedIndex].id;
       sessionStorage.setItem("EBOOK_FILTER", EBOOK_FILTER); 
       getBooks();
}

function emptyData() {
     $('.book')[0].innerHTML =
     "<div class='data-placeholder'>No data to show</div>";
}

function templateFormatter() {
       $.addTemplateFormatter({
              bookHrefFormatter: function(value, template) {
                     return `/pages/book.html?id=${value}`;
              },
              picFormatter: function(value, template) {
                     return `/assets/img/books/${value}.png`;
              },
              factFormatter: function(value, template) {
                     return value.split("\n").join("<br>");
                     
              },
              priceFormatter : function(value, template) {
                     return value.value+value.currency;
              },
              iconFormatter: function(value, template) {
                     if(value=='true') return 'book-icon'
                     else return 'book-icon-none';
              }
       });
}

function getFavorites() {
       fetch(`/v2/book/3`).then(function(response) {
              return response.json();
      }).then(parseFavorites).then(
      fetch(`/v2/book/4`).then(function(response) {
       return response.json();
       }).then(parseFavorites)).then(
       fetch(`/v2/book/7`).then(function(response) {
       return response.json();
       }).then(parseFavorites))
}

function parseFavorites(book) {
       templateFormatter();
       if(book[0].id == 3) $("#bookD").loadTemplate("#template", book);
       if(book[0].id == 4) $("#bookG").loadTemplate("#template", book);
       if(book[0].id == 7) $("#bookM").loadTemplate("#template", book);
}