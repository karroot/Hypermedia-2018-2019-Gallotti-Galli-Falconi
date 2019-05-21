
function getEvents() {
       fetch('/v2/events').then(function(response) {
              return response.json();
       }).then(parseData)
}

function parseData(event) {
       templateFormatter();
       
       $(".eventCard1-template-container").loadTemplate("#template", event, {
              append: true
       });
}

function templateFormatter() {
       $.addTemplateFormatter({
              picFormatter: function(value, template) {
                     return `/assets/img/events/${value}.png`;
              }
       });
}
