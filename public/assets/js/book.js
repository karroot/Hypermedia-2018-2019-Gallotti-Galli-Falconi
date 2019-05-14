 parse = function() {

       fetch('/v2/book').then(function(response) {
              return response.json();
      }).then(function(book) {
              $.addTemplateFormatter({
                     bookHrefFormatter: function(value, template) {
                            return `https://www.google.com`;
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

              var book1 = book.slice(0, book.length/2); 
              var book2 = book.slice(book.length/2, book.length);
              $(".bookCard1-template-container").loadTemplate("#template", book2, {
                     append: true
              });
              $(".bookCard2-template-container").loadTemplate("#template", book1, {
                     append: true
              });
              $("#btn-signup").popover();
        })
        
       };    
