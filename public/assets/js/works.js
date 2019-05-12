function getWorks() {
   getHeader();

    $.getJSON("../assets/works.json", function(works) {
        console.log(works); // this will show the works it in firebug console
        
        $(".work-One").loadTemplate("#type-template", works.type[0]);
        $(".work-Two").loadTemplate("#type-template", works.type[1]);
        $(".work-Three").loadTemplate("#type-template", works.type[2]);
    });

    getFooter();
};