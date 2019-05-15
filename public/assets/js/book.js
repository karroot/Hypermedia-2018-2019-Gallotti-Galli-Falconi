 function getBooks() {
       fetch('/v2/book').then(function(response) {
              return response.json();
      }).then(parseData)      
};    

function parseData(book) {
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
  
       book.map(b => {
              b.authorid1 = `/pages/author?id=${b.authorid1}`;
              if(b.authorid2!=null) b.authorid2 = `/pages/author?id=${b.authorid2}`;
              if(b.authorid3!=null) b.authorid3 = `/pages/author?id=${b.authorid3}`;
              if(b.authorid4!=null) b.authorid4 = `/pages/author?id=${b.authorid4}`;
                     }
              );
       
       var book1 = book.slice(0, book.length/2); 
       var book2 = book.slice(book.length/2, book.length);
       $(".bookCard1-template-container").loadTemplate("#template", book2, {
              append: true
       });
       $(".bookCard2-template-container").loadTemplate("#template", book1, {
              append: true
       });
}

function getBookById() {
       let book_id = parseQueryString(location.search).id;
       if (!book_id) location.replace("/pages/book.html");
       fetch(`/v2/book/${book_id}`).then(function(response) {
              return response.json();
      }).then(parseBookData)   
}

function parseBookData(book) {
       
}