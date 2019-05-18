function getAuthors() {
    fetch('/v2/author').then(function(response) {
           return response.json();
   }).then(parseData)      
};    

function parseData(author) {
    $.addTemplateFormatter({
           authorHrefFormatter: function(value, template) {
                return `/pages/author.html?id=${value}`;
           },
           picFormatter: function(value, template) {
                return `/assets/img/authors/${value}.png`;
           },
           lifeFormatter: function(value, template) {
                /*  Original
                let life = value.split(".", 1);
                */

                /*  Extract a substring
                 */
                let life = value.substr(0, 230);
                /*  End of edit
                 */
                
                return life+'...';
                  
           }
    });

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

function parseAuthorData(author) {
    
}