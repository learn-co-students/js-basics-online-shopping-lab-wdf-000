// var cart;
var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);

  cart.push({[item]: price});
  
  console.log(`${item} has been added to your cart.`);
  
  return cart;
}

function viewCart(){
  var result = new Array;
  
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
  else {
  for (var i in cart) {
    for(var item in cart[i]) {
      result.push(`${item} at $${cart[i][item]}`);
    }
  }
  console.log(`In your cart, you have ${result.join(", ")}.`);
  }
}

function removeFromCart(itemName){
  for (var i in cart){
    // debugger;
    if (cart[i].hasOwnProperty(itemName)) {
      cart.splice(i,1);
      return cart;
    }
  }
    console.log("That item is not in your cart.");
}

function placeOrder(creditCardNumber){
  if (typeof creditCardNumber === 'undefined'){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
    cart = [];
  }
}


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
