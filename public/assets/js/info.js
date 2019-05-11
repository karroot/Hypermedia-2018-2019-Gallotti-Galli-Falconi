function getInfo() {
   getHeader();
    let info = {
        "about": "MDGbooks was born in 2019 from an idea of ​​three friends who decided to combine their programming skills with the passion of reading. We are an independent e-commerce, disconnected from the big publishing houses in order to be free to sell every kind of book, even yours! <br>  We are just born but our hope is to be able to bring readers closer to the authors of their favorite books, let them meet and exchange a chat. For this reason a large part of our site revolves around events and we have decided to make them completely free in order to break down any barriers. <br></br> Our site is built with the most modern technologies in order to have a greater speed of navigation and a better experience for the user. <br> The constant improvement of your shopping experience and the conquest of your trust are what we work for every day, with renewed passion.",
        "team": [{
            "name": "Davide Galli",
            "description": "Computer Science student at Politecnico di Milano.<br> Friendly neighborhood engeneer."
        },
        {
            "name": "Gabriele Gallotti",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales dolor vehicula luctus placerat. Maecenas finibus ante urna, at semper."
        },
        {
            "name": "Matteo Falconi",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales dolor vehicula luctus placerat. Maecenas finibus ante urna, at semper."
        }]
    }

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

    getFooter();
};