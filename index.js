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
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  }

  var itemsWithPrice = [];
  
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      itemsWithPrice.push(`${item} at $${cart[i][item]}`);
    }
  }
  console.log(`In your cart, you have ${itemsWithPrice.join(', ')}.`);
}

function removeFromCart(item) {
  var matchItem = [];
  
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)){
      matchItem.push(item);
      cart.splice(i, 1);
    }
  }

  if (!matchItem.length){
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(creditCard) {
  if (typeof(creditCard) == 'undefined') {
    console.log("We don't have a credit card on file for you to place your order.");
  } else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart = [];
  }
}
