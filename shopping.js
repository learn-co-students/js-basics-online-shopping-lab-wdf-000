var cart = []
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
  var key = item
  var obj = {};
  obj[key] = Math.floor(Math.random() * 20)
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function setCart(arr) {
  if (arr.length == 0) {
    cart = [];
  } else {
    cart = arr; 
  }
}

function getCart() {
  return cart;
}

function viewCart() {
  var items = ""
  for (var i = 0, len = cart.length; i < len; i++) {
    var item = Object.keys(cart[i])[0]; 
    var price = cart[i][Object.keys(cart[i])[0]];
    items += `${item} at $${price}, `
  } 
  items = items.slice(0, -2);
  console.log(`In your cart, you have ${items}.`);
}

function removeFromCart(item) {
  tmp = false
  for (var i = 0, len = cart.length; i < len; i++) {
    var key = Object.keys(cart[i])[0]; 
    if (key === item) {
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
  
