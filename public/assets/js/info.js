function getInfo() {
    let info = {
        "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est magna, finibus eu hendrerit in, semper nec metus. Nullam rutrum erat sit amet nunc elementum hendrerit. Sed tellus turpis, egestas sit amet dapibus in, mattis vel nunc. Mauris non hendrerit ante, in commodo velit. Vestibulum euismod mi ac mauris aliquet sodales. In est velit, aliquam quis iaculis id, cursus non mauris. Fusce nisi neque, tristique a nunc vel, feugiat facilisis tortor<br></br> Pellentesque mollis et urna in finibus. Mauris tincidunt dui arcu. Curabitur feugiat est id libero vehicula suscipit. Ut in velit diam. Nam vestibulum, ligula sed pellentesque facilisis, sem diam scelerisque leo, in porttitor tortor ligula id est. Sed aliquam sem nulla, id accumsan ex congue sed. Sed ullamcorper tellus vel tellus laoreet facilisis. Nam malesuada at sem sit amet scelerisque.",
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
     };