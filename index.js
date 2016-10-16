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
  var price = Math.floor(Math.random() * 100);
  cart.push( { [item]: price } );
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var arr = [];
    var line = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        arr.push(`${item} at $${cart[i][item]}`);
      }
      console.log(line + arr.join(", ") + ".");
    }
  }
}

function removeFromCart(unwanted_item) {
  var present = false
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(unwanted_item)) {
      cart = cart.slice(0, i).concat(cart.slice(0 + 1));
      present = true
    }
  }
  if (present === false) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
