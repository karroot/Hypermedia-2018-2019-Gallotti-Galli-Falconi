
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
              picDesktopFormatter: function(value, template) {
                     return `/assets/img/events/desktop/${value}.png`;
              },
              picMobileFormatter: function(value, template) {
                     return `/assets/img/events/mobile/${value}.png`;
              },
              dateFormatter: function(value, template) { 
                     let temp = new Date(value.replace(' ', 'T'));
                     var month_names =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                     let myDate = temp.getDate() + "-" + (month_names[temp.getMonth()]) + "-" + (temp.getFullYear());
                     return myDate;     
              }
       });
}