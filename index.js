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
  var price = Math.floor(Math.random()*101);
  cart.push(createObjectWithKeyAndValue({}, item, price));
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  }

  const arr = [];

  for (let i = 0, c = cart.length; i < c; i++) {
    for (var itemDetails in cart[i]) {
      arr.push(`${itemDetails} at $${cart[i][itemDetails]}`);
    }
  }
  console.log(`In your cart, you have ${arr.join(', ')}.`);
}

function removeFromCart(item) {
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(creditCardNumber) {
  if (!creditCardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card 123.`);
    setCart([]);
  }
}

// helpers

function createObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
