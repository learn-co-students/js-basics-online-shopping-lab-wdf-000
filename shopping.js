var cart = []

function setCart(arr) {
  cart = arr;
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}

// var cart = [];

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}


function viewCart() {
  var string = "In your cart, you have ";
  for (var i = 0, len = cart.length; i < len; i++) {
    for (var item in cart[i]) {
      string = string + item  + " at $" + cart[i][item] + ", ";
    }
  }
  string = string.substr(0,(string.length-2)) + ".";
  console.log(string);
  return cart;
}

function removeFromCart(arg) {
  var tmp = true;
  for (var i = 0, len = cart.length; i < len; i++) {
    // for (var item in cart[i]) {
    //   if (item == arg ) {
    //     // tmp = i;
    //     cart.splice(i,1);
    //     break;
    //   }
    // }
    if (Object.keys(cart[i])[0] == arg) {
      cart.splice(i,1);
      tmp = false;
      break;
    }
  }
  if (tmp) {
    console.log("That item is not in your cart.")
  }
  return cart;
}

function addToCart(arg) {
  var h = {};
  h[arg] = Math.floor( Math.random() * 100 );
  cart.push(h);
  console.log(arg + " has been added to your cart.");
  return cart;
}

function getCart() {
  return cart;
}

// addToCart("test1");
// addToCart("test2");
// addToCart("test3");
// removeFromCart("test2");
// viewCart();
