function getInfo() {
    let info = {
        "about": "This is a descriprion. This is a descriprion. This is a descriprion. This is a descriprion.<br></br> This is a descriprion. This is a descriprion. This is a descriprion. This is a descriprion. This is a descriprion. This is a descriprion. This is a descriprion.<br> This is a descriprion. This is a descriprion. This is a descriprion. This is a descriprion. This is a descriprion. This is a descriprion. This is a descriprion. This is a descriprion. This is a descriprion. This is a descriprion.    ",
        "team": [{
            "name": "Davide Galli",
            "description": "Computer Science student at Politecnico di Milano.<br> Friendly neighborhood engeneer."
        },
        {
            "name": "Gabriele Gallotti",
            "description": "text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text"
        },
        {
            "name": "Matteo Falconi",
            "description": "text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text"
        }]
    }

    $.addTemplateFormatter({
        imgFormatter: function(value, template) {
               let v = value.replace(" ", "");
               return `../img/team/${v}.jpg`
        }
    });

    $(".about-template-container").loadTemplate("#info-template", info);
    $(".teamOne-template-container").loadTemplate("#team-template", info.team[0]);
    $(".teamTwo-template-container").loadTemplate("#team-template", info.team[1]);
    $(".teamThree-template-container").loadTemplate("#team-template", info.team[2]);
     };