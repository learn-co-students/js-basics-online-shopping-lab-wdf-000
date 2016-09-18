var cart = []

function setCart(array) {
  cart = array;
  return cart
}

function getCart() {
  return cart
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

function addToCart(item) {
  const price = Math.floor(Math.random()*100);
  cart.push({[item] : price});
  console.log(item + " has been added to your cart.");
  return cart;
}  

function viewCart() {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.")
  } else {
    var itemPrice = []
    for(var i = 0; i < cart.length; i++) {
      var keys = Object.keys(cart[i]);
      itemPrice.push(`${keys} at $${cart[i][keys]}`)
    }
    console.log(`In your cart, you have ${itemPrice.join(', ')}.`)
  }
}

function removeFromCart(item) {
  tmp = false
  for (var i = 0, l = cart.length; i < l; i++) {
    var keys = Object.keys(cart[i])[0]; 
    if (keys === item) {
      delete cart[i];
      tmp = true;
    } 
  }
  if (tmp == false) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cc) {
  if (typeof cc === "number" ) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
    cart = [];
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
} 