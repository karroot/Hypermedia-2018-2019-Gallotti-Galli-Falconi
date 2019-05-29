$(document).ready( () => {
  try{
    if(isAuthenticated()) {
    $("#header")
    .load('/assets/header.html', function() {
      $('#beforeLogIn').css('display', 'none');
    });
    } else {
      $("#header")
      .load('/assets/header.html', function() {
        $('#afterLogIn').css('display', 'none');
      });
    }
  $("#footer")
  .load('/assets/footer.html');
  }catch(e)  {
    window.location.href = "/pages/error.html";
  }
});

//    d(o.o)b
//      p.q
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

<<<<<<< HEAD
function showMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function showMoreMobile() {
  var dotsMobile = document.getElementById("dotsMobile");
  var moreTextMobile = document.getElementById("moreMobile");
  var btnTextMobile = document.getElementById("myBtnMobile");

  if (dotsMobile.style.display === "none") {
    dotsMobile.style.display = "inline";
    btnTextMobile.innerHTML = "Read more";
    moreTextMobile.style.display = "none";
  } else {
    dotsMobile.style.display = "none";
    btnTextMobile.innerHTML = "Read less";
    moreTextMobile.style.display = "inline";
  }
}

$('#password, #confirm_password').on('keyup', function () {
  if ($('#password').val() == $('#confirm_password').val()) {
    $('#message').html('Matching').css('color', 'green');
  } else 
    $('#message').html('Not Matching').css('color', 'red');
}); 

=======
>>>>>>> e3d7e38fdd2f87971869ae7cd652a1f12de095bc
//Register
$('#singUp').submit(function(e) {
  e.preventDefault();

  $("#fail-singup")[0].innerHTML = ''
  $.ajax({
    type: $('#singUp').attr('method'),
    url: $('#singUp').attr('action'),
    data: $('#singUp').serialize().replace("%40", "@"),
    success: function(data, status){
        if(data.error == 'mail usata') $("#fail-singup")[0].innerHTML = `<div class="alert alert-danger" role="alert"> This email has been already used! </div>`
        if(data.ok=='utente registrato' ) {
           $("#fail-singup")[0].innerHTML = `<div class="alert alert-success" role="alert"> WELCOME! </div>`
          window.setTimeout( function() {window.location.href = "/"}, 1500 );
        }
        if(data.error == 'utente non registrato') history.go(0);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
     
    }
  });
});
