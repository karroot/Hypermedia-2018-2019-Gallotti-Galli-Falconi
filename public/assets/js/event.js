clearBook();

var MONTH_FILTER = "";
var EVENT;

function getEvents() {
       fetch('/v2/events').then(function(response) {
              return response.json();
       }).then(parseData)
}

function getEventById() {
       let id = parseQueryString(location.search).id;
       fetch(`/v2/events/${id}`).then(function(response) {
              return response.json();
       }).then(parseEventData)
}

function getAuthorByEvent(id) {
       fetch(`/v2/book/${id}/author`).then(function(response) {
              return response.json();
      }).then(parseAuthorData)
}

function getBookbyEvent(book_id) {
       fetch(`/v2/book/${book_id}`).then(function(response) {
              return response.json();
       }).then(parseBookData)
}

function parseAuthorData(data) {
       let html = '<h4 class="font-weight-bold"> Hosted by ';
       html += `<a class="btn-link font-weight-bold" href="/pages/author.html?id=${data[0].authorid}">${data[0].name}`
       if(data.length>1){
              data.slice(1, data.length).forEach( a =>  html += `<a class="btn-link font-weight-bold" href="/pages/author.html?id=${a.authorid}">, ${a.name}`)
       }
       $('.author-template-container')[0].innerHTML = html;
}

function parseBookData(book) {
       templateFormatter();

       $(".book-template-container").loadTemplate("#bookTemplate", book);
}

function parseData(event) {
       $(".event").html("");

       templateFormatter();
       MONTH_FILTER = sessionStorage.getItem("MONTH_FILTER");

       if(MONTH_FILTER != "") {
              let d = new Date;
              let m = d.getMonth();
              event = event.filter( e => {
                     let temp = new Date(e.date.replace(' ', 'T'));
                     return temp.getMonth() == m}
                     );
       }
       if(!event.length) emptyData();
       $(".eventCard1-template-container").loadTemplate("#template", event.sort(function(a, b){ //order chronologically
             return (new Date(a.date) - new Date(b.date))
       }), {
              append: true
       });
}

function parseEventData(event) {
       EVENT = event; 
       templateFormatter();

       document.title = event[0].title;
       event[0].overview = event[0].overview.split('\n').join('<br>');

       $('#direction')[0].innerHTML = `<a id="dirMapLink" class="btn-link"  target="_blank" href="https://bing.com/maps/default.aspx?rtp=~pos.${event[0].lat}_${event[0].lon}">Get direction for ${event[0].place}</a>`
       $(".eventCard1-template-container").loadTemplate("#template", event);
       $(".description-template-container").loadTemplate("#template2", event);
      
       getAuthorByEvent(event[0].bookId);
       getBookbyEvent(event[0].bookId);
}

function populateOptions() {
       MONTH_FILTER = sessionStorage.getItem("MONTH_FILTER");
       let html = "<option id=''>All dates</option>";
       if(MONTH_FILTER != "") html += `<option id='month' selected>This month</option>`;
       else html += "<option id='month'>This month</option>";
        $("#date")[0].innerHTML = html;
 }

 function handleChange() {
       let selectorMonth = $("#date")[0];
       MONTH_FILTER = selectorMonth.options[selectorMonth.selectedIndex].id;
       sessionStorage.setItem("MONTH_FILTER", MONTH_FILTER); 
       getEvents();
 }

 function emptyData() {
       $('.event')[0].innerHTML =
       "<div class='data-placeholder'>No data to show</div>";
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
              },
              eventHrefFormatter: function(value, template) {
                     return `/pages/event.html?id=${value}`;
              },
              descriptionFormatter: function(value, template) {
                     return value.split("\n").join("<br>");
              },
              authorOneFormatter : function(value, template) {
                     return `${value}`;
              },
              authorFormatter : function(value, template) {
                     if(value!=null) {
                            return `, ${value}`;
                     }
              },
              bookHrefFormatter: function(value, template) {
                     return `/pages/book.html?id=${value}`;
              },
              picBookFormatter: function(value, template) {
                     return `/assets/img/books/${value}.png`;
              }
       });
}

function pinLocations() {
       if(!EVENT) window.setTimeout(getMap(), 750);
       else  {
              getMap();
       }

}

function getMap() {
       let map = new Microsoft.Maps.Map(document.getElementById('map'), {
              showMapTypeSelector: false,
              center: new Microsoft.Maps.Location(EVENT[0].lat, EVENT[0].lon),
              zoom: 15
            });
            map.setView({ mapTypeId: Microsoft.Maps.MapTypeId.grayscale });
            var latLon = new Microsoft.Maps.Location(EVENT[0].lat, EVENT[0].lon);
            var pushpin = new Microsoft.Maps.Pushpin(latLon, {
                   title: EVENT[0].place,
                   color: "#FF3B30"
            });
                map.entities.push(pushpin);
}
     