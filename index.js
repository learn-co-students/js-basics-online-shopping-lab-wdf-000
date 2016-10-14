// here we are defining the variable, but not assigning it
// assignment happens in line 6
var cart;

function setCart(newCart) {
  cart = newCart;
  return cart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100);
  getCart().push( {[item]: price} );
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

function viewCart() {
  if (cart.length > 0) {
    let itemPrices = [];
    var finalString = "In your cart, you have ";

    for (var i = 0; i < cart.length; i++) {
      let object = cart[i];
      for (var item in object) {
        itemPrices.push(`${item} at $${object[item]}`);
      }
    }
    finalString += itemPrices.join(', ');
    finalString += '.';

    console.log(finalString);
  } else {
    console.log('Your shopping cart is empty.');
  }
}

function removeFromCart(itemToRemove) {
  // set a flag for found items
  // will only flip to true if items are found as we itereate through cart array
  let itemFound = false;

  for (var i = 0, len = cart.length; i < len; i++) {
    if ( cart[i].hasOwnProperty(itemToRemove) ) {
      cart.splice(i, 1);
    }
  }

  if ( !itemFound ) {
    console.log('That item is not in your cart.');
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log( `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.` );
    cart = [];
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
