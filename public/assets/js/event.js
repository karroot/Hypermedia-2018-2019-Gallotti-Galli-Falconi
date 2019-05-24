
var MONTH_FILTER = "";

function getEvents() {
       fetch('/v2/events').then(function(response) {
              return response.json();
       }).then(parseData)
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
              }
       });
}