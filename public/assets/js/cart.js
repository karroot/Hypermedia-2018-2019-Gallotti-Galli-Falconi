function getCart() {
    let user_id = sessionStorage.getItem("authenticate");
    if (!user_id) location.replace("/");
    fetch(`/v2/user/${user_id}/cartdetail`).then(function(response) {
           return response.json();
   }).then(parseCart)
}

function parseCart(cart) {
  if(cart.length==0) {
    $('#cart-elem')[0].innerHTML =`<img src="/assets/img/cart.png" class='img-fluid mx-auto d-block my-5' alt="Empty cart">`
    $('#total')[0].innerHTML =`<p class='h4 py-2 mx-2 border-top' >0€</p>`
  }
  else {
    templateFormatter();

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

    $('#total')[0].innerHTML =`<p class='h4 py-2 mx-2 border-top' >${total.toFixed(2)}€</p>`
      $(".cart-template-container").loadTemplate("#template", cart, {
          append: true
    });
  }
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
    }
  });
}