function getCart() {
    let user_id = sessionStorage.getItem("authenticate");
    if (!user_id) location.replace("/");
    fetch(`/v2/user/${user_id}/cartdetail`).then(function(response) {
      if(response.redirected) location.replace("/");
      else return response.json();
   }).then(parseCart)
}

function parseCart(cart) {
  $(".cart-template-container").html("");

  if(cart.length==0) {
    $('#cart-elem')[0].innerHTML =`<img src="/assets/img/cart.png" class='img-fluid mx-auto d-block my-5' alt="Empty cart">`
    $('#total')[0].innerHTML =`<h3 class='h4 py-2 mx-2 border-top' >-- €</h3>`
  }
  else {
    templateFormatter();

    cart.map(e => e.bookId = `book-${e.bookId}` + ` ebook-${e.ebook}` + ` qnt-${e.quantity}`)

    cart.map(e => {
      e.value = (e.ebook=='true') ? (e.value*e.quantity*0.42) : (e.value*e.quantity)
    })

    let total=0;
    for(let i=0; i<cart.length; i++) {
      total += cart[i].value;
    }
    
    cart.map(e => {
      e.value = e.value.toFixed(2)+'€'
    })

    $('#total')[0].innerHTML =`<h3 class='h4 py-2 mx-2 border-top' >${total.toFixed(2)}€</h3>`
      $(".cart-template-container").loadTemplate("#template", cart.sort(function(a, b){ //order alphabetically
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        if(a.title==b.title && a.ebook=='false') {return 1}
        if(a.title==b.title && a.ebook!='false') {return -1}
        return 0;
    }), {
          append: true
    });
  }
}

function buy(ebook) {
  let book_id = parseInt(parseQueryString(location.search).id, 10);
    let obj =  {
      "quantity": 1,
      "bookId": book_id,
      "ebook": ebook
    }
    put(obj);
}

function plusone(event) {
  let x = event.target;
  let book_id = parseClass(x.className).book;
  let ebook =  parseClass(x.className).ebook;
  let obj =  {
    "quantity": 1,
    "bookId": parseInt(book_id, 10),
    "ebook": ebook
  }
  put(obj)
}

function minusone(event) {
  let x = event.target;
  let book_id = parseInt(parseClass(x.className).book, 10);
  let qnt = parseInt(parseClass(x.className).qnt, 10);
  let ebook =  parseClass(x.className).ebook;
  let obj =  {
    "quantity": qnt,
    "bookId": book_id,
    "ebook": ebook
  }
  del(obj);
}

function put(obj) {
  let user_id = sessionStorage.getItem("authenticate");
  if (!user_id) location.replace("/pages/login.html");
  else {
    $.ajax({
      type:'PUT',
      url: `/v2/cart/detail/${user_id}`,
      contentType: 'application/json',
      data: JSON.stringify(obj),
      success: function(data, status){
        $("#bought").fadeToggle(300)
        window.setTimeout( function() { $("#bought").fadeToggle(300);}, 4000 );
        getCart();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        window.alert("Slow down! We can't support your speed yet")
      }
   })
  }
}

function del(obj) {
  let user_id = sessionStorage.getItem("authenticate");
  if (!user_id) location.replace("/pages/login.html");
  else {
    $.ajax({
      type:'DELETE',
      url: `/v2/cart/detail/${user_id}`,
      contentType: 'application/json',
      data:  JSON.stringify(obj),
      success: function(data, status){
        getCart();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        window.alert("Slow down! We can't support your speed yet")
      }
   });
  }
}


function parseClass(clazz) {
  let qs = {};
  clazz.split(" ").forEach(i => {
    let t = i.split("-");
    qs[t[0]] = t[1];
  });
  return qs;
}

function templateFormatter() {
  $.addTemplateFormatter({
    statusFormatter: function(value, template) {
      if(value=="available") return 'badge-success';
      else return 'badge-danger';
    },
    formatFormatter: function(value, template) {
      if(value=="true") return 'eBook';
      else return 'Paperback'
    },
    quantityFormatter : function(value, template) {
      return `x${value}`;
    },
    bookHrefFormatter: function(value, template) {
      return `/pages/book.html?id=${parseClass(value).book}`;
    }
  });
}