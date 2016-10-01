var cart = [];

function setCart(newCart) {
  cart = newCart;
}
function getCart(){
  return cart;
}
function addToCart(item){
  var price = Math.floor(Math.random()*100) + 1;
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var itemString = ""
  if (cart.length > 0) {
      itemString = 'In your cart, you have';
    for (var i = 0, n = cart.length; i < n-1; i++) {
      var items = Object.keys(cart[i]);
      itemString = itemString + ` ${items[0]} at $${cart[i][items[0]]},`
    }
    items = Object.keys(cart[n-1])
    itemString = itemString + ` ${items[0]} at $${cart[n-1][items[0]]}.`
  } else {
      itemString = 'Your shopping cart is empty.'
  }
   console.log(itemString)
}

function removeFromCart(item){
  var found = 0;
  for (var i = 0, n = cart.length; i < n; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      found = 1;
    }
  }
  if (found === 0) {
    console.log("That item is not in your cart.");
  }
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

function placeOrder(cardNumber){
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
