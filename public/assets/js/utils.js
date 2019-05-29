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

  $("#fail-login")[0].innerHTML = ''
  $.ajax({
    type: $('#singIn').attr('method'),
    url: $('#singIn').attr('action'),
    data: $('#singIn').serialize().replace("%40", "@"),
    success: function(data, status){
          try{
            sessionStorage.setItem("authenticate", "true"); 
            $("#fail-login")[0].innerHTML = `<div class="alert alert-success" role="alert"> WELCOME IN MDGBOOKS, ${data[0].username}! </div>`
           window.setTimeout( function() {history.back()}, 1500 );
          } catch(e)  {
            //window.location.href = "/pages/error.html";
          }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      $("#fail-login")[0].innerHTML = '<div class="alert alert-danger" role="alert"> email or password incorrect! </div>'
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
  sessionStorage.setItem("authenticate", "");;
  history.go(0); //refresh page
}

function clearFilter() {
  sessionStorage.setItem("EBOOK_FILTER", "");
  sessionStorage.setItem("GENRE_FILTER", "");
  sessionStorage.setItem("THEME_FILTER", "");
  sessionStorage.setItem("MONTH_FILTER", "");

}

function setEbook() {
  clearFilter();
  sessionStorage.setItem("EBOOK_FILTER", "eBook");
}

$('#password, #confirm_password').on('keyup', function () {
  if ($('#password').val() == $('#confirm_password').val()) {
    $('#message').html('Matching').css('color', 'green');
  } else 
    $('#message').html('Not Matching').css('color', 'red');
}); 

//Register
$('#singUp').submit(function(e) {
  e.preventDefault();

  //$("#fail-login")[0].innerHTML = ''
  $.ajax({
    type: $('#singUp').attr('method'),
    url: $('#singUp').attr('action'),
    data: $('#singUp').serialize().replace("%40", "@"),
    success: function(data, status){
          try{ 
            $("#fail-login")[0].innerHTML = `<div class="alert alert-success" role="alert"> WELCOME IN MDGBOOKS, ${data[0].username}! </div>`
           
          } catch(e)  {
            //window.location.href = "/pages/error.html";
          }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      $("#fail-login")[0].innerHTML = '<div class="alert alert-danger" role="alert"> email or password incorrect! </div>'
    }
  });
});