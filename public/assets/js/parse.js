var book = [{
    author: 'Dino Buzzati',
    title: 'Il deserto dei tartari',
    picture: './DT.png',
    description: 'This is the contents a description. This is the contents a description. This is the contents a description. This is the contents a description',
    id: '1'
},
{
author: 'J.K. Rowling',
title: 'Harry Potter',
picture: './HP5.png',
description: 'This is the contents a description. This is the contents a description. This is the contents a description. This is the contents a description',
id: '2'
},
{
author: 'André Aciman',
title: 'Call me by your name',
picture: './CMBYN.png',
description: 'This is the contents a description. This is the contents a description. This is the contents a description. This is the contents a description',
id: '3'
}
],

 parse = function() {
       $.addTemplateFormatter({
              bookHrefFormatter: function(value, template) {
                     return `https://www.google.com`;
              },
              authorFormatter : function(value, template) {
                     return `<small class="text-muted"> Written by ${value} </small>`;
              },
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
        };    
