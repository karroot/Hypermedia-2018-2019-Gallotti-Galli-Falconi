function getWorks() {
    $.getJSON("../assets/works.json", function(works) {
        console.log(works); // this will show the works it in firebug console
        
        $(".work-One").loadTemplate("#type-template", works);
    });

};