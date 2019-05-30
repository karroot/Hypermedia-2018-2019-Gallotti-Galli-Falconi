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

function geteBook() {
       $("#book-title")[0].innerHTML = "<h1>eBooks</h1>";
       fetch('/v2/ebook').then(function(response) {
              return response.json();
       }).then(filtereBook);
}

function filterBook(book) {
      book = book.filter(b => b.genre==GENRE_FILTER);
       parseData(book);
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


function getBookById() {
       let book_id = parseQueryString(location.search).id;
       if (!book_id) location.replace("/pages/books.html");
       fetch(`/v2/book/${book_id}`).then(function(response) {
              return response.json();
      }).then(parseBookData)
      getSimilarBook(book_id);
      getEventByBook(book_id);
      getReview(book_id);
}

function getAuthorByBook(id) {
    fetch(`/v2/book/${id}/author`).then(function(response) {
           return response.json();
   }).then(parseAuthorData)
}

function getEventByBook(id) {
       fetch(`/v2/book/${id}/events`).then(function(response) {
              return response.json();
       }).then(parseEventData)
}

function getReview(id) {
       fetch(`/v2/book/${id}/reviews`).then(function(response) {
              return response.json();
       }).then(parseReviewData)
}

function getSimilarBook(id) {
       fetch(`/v2/book/${id}/similar`).then(function(response) {
              return response.json();
       }).then(parseSimilarData)
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

function parseBookData(book) {
       templateFormatter();

       document.title = book[0].title;
       book[0].intro = book[0].intro.split('\n').join('<br>');

       $(".book-template-container").loadTemplate("#template", book);
       $(".facSheet-template-container").loadTemplate("#template2", book);
       getAuthorByBook(book[0].id);
}

function parseAuthorData(data) {
       let html = '<p class="font-weight-bold mx-4"> Written by ';
       html += `<a class="btn-link font-weight-bold" href="/pages/author.html?id=${data[0].authorid}">${data[0].name}`
       if(data.length>1){
              data.slice(1, data.length).forEach( a =>  html += `<a class="btn-link font-weight-bold" href="/pages/author.html?id=${a.authorid}">, ${a.name}`)
       }
       $('.author-template-container')[0].innerHTML = html;
}

function parseEventData(event) {
       templateFormatter();
   
       if(event[0] == undefined) {
           $(".eventCard-template-container")[0].innerHTML = "<p class='mx-3'>This book doesn't have any event yet</p>"
       }
       else {
           $(".eventCard-template-container").loadTemplate("#event-template", event, {
               append: true
           });
   }
}

function parseReviewData(review) {
       templateFormatter();

       if(review[0] == undefined) {
              $(".review-template-container")[0].innerHTML = "<p>This book doesn't have any review yet</p>"
          }
          else {
              $(".review-template-container").loadTemplate("#review-template", review, {
                  append: true
              });
       }
}

function parseSimilarData(book) {
       templateFormatter();

       if(book[0] == undefined) {
              $(".bookCard-template-container")[0].innerHTML = "<p class='mx-3'>This book doesn't have any similar book :'(</p>"
          }
          else {
              $(".bookCard1-template-container").loadTemplate("#book-template", book.slice(0, book.length/2), {
                  append: true
              });
              
              $(".bookCard2-template-container").loadTemplate("#book-template", book.slice(book.length/2, book.length), {
                     append: true
                 });
       }
}


function parseFavorites(book) {
       templateFormatter();
       if(book[0].id == 3) $("#bookD").loadTemplate("#template", book);
       if(book[0].id == 4) $("#bookG").loadTemplate("#template", book);
       if(book[0].id == 7) $("#bookM").loadTemplate("#template", book);
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
              factSingleFormatter : function(value, template) {
                     return value.split("\n").join("<li>");
                     
              },
              priceFormatter : function(value, template) {
                     return value.value+value.currency;
              },
              iconFormatter: function(value, template) {
                     if(value=='true') return 'book-icon'
                     else return 'book-icon-none';
              },
              eventHrefFormatter: function(value, template) {
                     return `/pages/event.html?id=${value}`;
              },
              picMobileFormatter: function(value, template) {
                     return `/assets/img/events/mobile/${value}.png`;
              },
              dateFormatter: function(value, template) { 
                     let temp = new Date(value.replace(' ', 'T'));
                     var month_names =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                     let myDate = temp.getDate() + "-" + (month_names[temp.getMonth()]) + "-" + (temp.getFullYear());
                     return myDate;     
              },
              authorOneFormatter : function(value, template) {
                     return `${value}`;
              },
              authorFormatter : function(value, template) {
                     if(value!=null) {
                            return `, ${value}`;
                     }
              },
              starsFormatter: function(value, template) {
                     return `/assets/img/books/${value}s.png`
              },
              ebookButtonFormatter : function(value, template) {
                     if(value != 'true') return `disabled`
              },
              bookPriceFormatter : function(value, template) {
                     return  `<b>Paper ${value.value}${value.currency}`
              },
              eBookPriceFormatter : function(value, template) {
                     return  `<b>eBook ${(value.value*0.42).toFixed(2)}${value.currency}`
              },
              introLongFormatter : function(value, template) {
                     let intro1 = value.substr(0,350);
                     let intro2 = value.substr(350, value.length);
                     intro1 += intro2.split('.')[0] + '.';
                     if(intro2.split('.')[1].startsWith('<br>')) {
                            intro2 = intro2.replace(intro2.split('.')[0] + '.<br>', ""); //No double <br>
                     }
                     else {
                            intro2 = intro2.replace(intro2.split('.')[0] + '.', "");
                     }
                     return intro1 + '<span id="dots"> ...</span>' + '<span id="more">' + intro2 + '</span>';
              },
              introMoileLongFormatter : function(value, template) {
                     let intro1 = value.substr(0,220);
                     let intro2 = value.substr(220, value.length);
                     intro1 += intro2.split('.')[0] + '.';
                     if(intro2.split('.')[1].startsWith('<br>')) {
                            intro2 = intro2.replace(intro2.split('.')[0] + '.<br>', "");
                     }
                     else {
                            intro2 = intro2.replace(intro2.split('.')[0] + '.', "");
                     }
                     return intro1 + '<span id="dotsMobile"> ...</span>' + '<span id="moreMobile">' + intro2 + '</span>';
              }
       });
}
