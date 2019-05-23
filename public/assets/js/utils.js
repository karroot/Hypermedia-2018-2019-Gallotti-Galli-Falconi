$(document).ready( () => {
  try{
    if(isAuthenticated()) {
      $("#header")
        .load('/assets/loggedHeader.html');
    } else {
      $("#header")
        .load('/assets/header.html');
    }
  $("#footer")
  .load('/assets/footer.html');
  }catch(e)  {
    window.location.href = "/pages/error.html";
  }
});

//Login
$('#singIn').submit(function(e) {
  e.preventDefault();

  $.ajax({
    type: $('#singIn').attr('method'),
    url: $('#singIn').attr('action'),
    data: $('#singIn').serialize().replace("%40", "@"),
    success: function(data, status){
    console.log(data);
          alert("Login successful!");
          try{
            sessionStorage.setItem("authenticate", "true");
            history.go(-1); 
          } catch(e)  {
            window.location.href = "/pages/error.html";
          }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("Error: email or password incorrect");
    }
  });
});

function parseQueryString(search_string) {
  search_string = search_string.replace("?", "");
  let qs = {};
  search_string.split("&").forEach(i => {
    let t = i.split("=");
    qs[t[0]] = t[1];
  });
  return qs;
}


function isAuthenticated() {
    if(sessionStorage.getItem("authenticate")=="true") return true;
    else return false; 
}

function logout() {
  sessionStorage.clear();
  history.go(0); //refresh page
}

function clearEvent() {
  sessionStorage.setItem("EBOOK_FILTER", "");
  sessionStorage.setItem("GENRE_FILTER", "");
  sessionStorage.setItem("THEME_FILTER", "");
}