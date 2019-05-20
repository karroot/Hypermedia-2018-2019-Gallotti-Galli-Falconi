var GENRE_FILTER = "";
var THEME_FILTER = "";
var EBOOK_FILTER = "";

function getBooks() {
       if(EBOOK_FILTER=="") getAll();
       else geteBook();
};

function getAll() {
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
       fetch('/v2/ebook').then(function(response) {
              return response.json();
       }).then(filtereBook);
}

function filtereBook(eBook) {
       if(GENRE_FILTER!="") eBook = eBook.filter(b => b.genre==GENRE_FILTER);
       if(THEME_FILTER!="") eBook = eBook.filter(b => b.theme==THEME_FILTER);
       parseData(eBook);
}

function parseData(book) {
       $("#book1").html("");
       $("#book2").html("");

       if(!book.length) emptyData();
      
       book.map(b => {
              b.authorid1 = `/pages/author.html?id=${b.authorid1}`;
              if(b.authorid2!=null) {
                     b.authorid2 = `/pages/author.html?id=${b.authorid2}`;
                     if(b.authorid3!=null) {
                            b.authorid3 = `/pages/author.html?id=${b.authorid3}`;
                            if(b.authorid4!=null) b.authorid4 = `/pages/author.html?id=${b.authorid4}`
                     };
              }
       });

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

function getTheme() {
       fetch('/v2/theme').then(function(response) {
              return response.json();
      }).then(populateThemeOptions)
      fetch('/v2/genre').then(function(response) {
              return response.json();
       }).then(populateGenreOptions)
}


function populateGenreOptions(genre) {
       let html = "<option id=''>All genre</option>";
       genre.forEach(g => (html += `<option id='${g.genre}'>${g.genre}</option>`));
       $("#book-genre")[0].innerHTML = html;
}

function populateThemeOptions(theme) {
       let html =  "<option id=''>All theme</option>";;
       theme.forEach(t => (html += `<option id='${t.theme}'>${t.theme}</option>`));
       $("#book-theme")[0].innerHTML = html;
}

function handleChange(e) {
       let selectorGenre = $("#book-genre")[0];
       GENRE_FILTER = selectorGenre.options[selectorGenre.selectedIndex].id;
       let selectorTheme = $("#book-theme")[0];
       THEME_FILTER = selectorTheme.options[selectorTheme.selectedIndex].id;
       let selectorFormat = $("#book-format")[0];
       EBOOK_FILTER = selectorFormat.options[selectorFormat.selectedIndex].id;
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
              authorOneFormatter : function(value, template) {
                     return `<small class="text-muted"> ${value}</small>`;
              },
              authorFormatter : function(value, template) {
                     if(value!=null) {
                            return `<small class="text-muted">, ${value}</small>`;
                     }
              }
       });
}