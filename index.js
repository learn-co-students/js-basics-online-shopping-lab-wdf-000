var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0 ){
    console.log("Your shopping cart is empty.")
  } else {
    var output = [];
    for(var i = 0; i < cart.length; i++){
          var item = Object.keys(cart[i])[0];
          var item_price = cart[i][item];
          output.push(` ${item} at $${item_price}`)
    }
    console.log("In your cart, you have" + output.join(",") + ".")
  }
}


function removeFromCart(item) {
  var original_size = cart.length;
  for (var i = 0; i < cart.length; i ++){
  		if (Object.keys(cart[i]).includes(item)){
  		  cart.splice(i, 1);
  		}
  }
    if (cart.length === original_size) {
      console.log("That item is not in your cart.");
    }
}

function placeOrder(creditCard) {
   if (!creditCard){
     console.log("We don't have a credit card on file for you to place your order.");
   } else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
     cart = [];
   }
}
