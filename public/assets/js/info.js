function getInfo() {
   getHeader();

    $.getJSON("/assets/info.json", function(info) {
        console.log(info); // this will show the info it in firebug console
        $.addTemplateFormatter({
            imgFormatter: function(value, template) {
                let v = value.replace(" ", "");
                return `../assets/img/team/${v}.png`
            }
        });

        $(".about-template-container").loadTemplate("#info-template", info);
        $(".teamOne-template-container").loadTemplate("#team-template", info.team[0]);
        $(".teamTwo-template-container").loadTemplate("#team-template", info.team[1]);
        $(".teamThree-template-container").loadTemplate("#team-template", info.team[2]);
    });

    getFooter();
};