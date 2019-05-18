function getAuthors() {
    fetch('/v2/author').then(function(response) {
           return response.json();
   }).then(parseData)      
};    

function parseData(author) {
    templateFormatter();

    $(".authorCard-template-container").loadTemplate("#template", author.sort(function(a, b){ //order alphabetically
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    }), {
           append: true
    });
}

function getAuthorById() {
    let author_id = parseQueryString(location.search).id;
    if (!author_id) location.replace("/pages/authors.html");
    fetch(`/v2/author/${author_id}`).then(function(response) {
           return response.json();
   }).then(parseAuthorData)   
}

function getBookByAuthor() {
    let author_id = parseQueryString(location.search).id;
    if (!author_id) location.replace("/pages/authors.html");
    fetch(`/v2/author/${author_id}/book`).then(function(response) {
           return response.json();
   }).then(parseBookData)
}

function parseAuthorData(author) {
    templateFormatter();
    
    author.map(a => a.life.split("\n").join("<br>"));
    author.filter(a => a.award==null).map(a => a.award = "This author hasn't won any awards yet.");

    $(".breadcrumb-template-container").loadTemplate("#breadcrumbTemplate", author, {
           append: true
    });

    $(".author-template-container").loadTemplate("#template", author, {
        append: true
    });

    getBookByAuthor();
}
    
   
function parseBookData(book) {
    templateFormatter();

    $(".book1-template-container").loadTemplate("#bookTemplate", book.slice(0, book.length/5), {
        append: true
    });
    $(".book2-template-container").loadTemplate("#bookTemplate", book.slice(book.length/5, 2*(book.length/5)), {
        append: true
    });
    $(".book3-template-container").loadTemplate("#bookTemplate",  book.slice(2*(book.length/5), 3*(book.length/5)), {
        append: true
    });
    $(".book4-template-container").loadTemplate("#bookTemplate", book.slice(3*(book.length/5), 4*(book.length/5)), {
        append: true
    });
    $(".book5-template-container").loadTemplate("#bookTemplate", book.slice(4*(book.length/5), book.length) , {
        append: true
    });

 
}

function templateFormatter() {
    $.addTemplateFormatter({
        authorHrefFormatter: function(value, template) {
             return `/pages/author.html?id=${value}`;
        },
        picFormatter: function(value, template) {
             return `/assets/img/authors/${value}.png`;
        },
        picBookFormatter: function(value, template) {
            return `/assets/img/books/${value}.png`;
        },
        lifeFormatterMobile: function(life, template) {

         let lifeMobile = life.substr(0, 100);
         return lifeMobile+'...';
        },
        lifeFormatter: function(value, template) {
             /*  Extract a substring
              */
             let life = value.substr(0, 230);
             return life+'...';      
        },
        bookHrefFormatter: function(value, template) {
            return `/pages/book.html?id=${value}`;
     }
    });
}