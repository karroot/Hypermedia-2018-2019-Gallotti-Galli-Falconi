$(document).ready( () => {
$("#header")
  .load('/assets/header.html');
  $("#footer")
  .load('/assets/footer.html');
})

//Login
$('#singIn').submit(function(e) {
  e.preventDefault();
  console.log($('#singIn').serialize().replace("%40", "@")),

  $.ajax({

  type: $('#singIn').attr('method'),
  url: $('#singIn').attr('action'),
  data: $('#singIn').serialize().replace("%40", "@"),
  success: function(msg){
        alert("Login successful!");
        history.go(-1); 
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
