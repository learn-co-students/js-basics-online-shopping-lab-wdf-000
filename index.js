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

function addToCart(item){
  var min = 0;
  var max = 100;
  var price = Math.floor(Math.random() * ( max - min + 1)) + min;
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`)
  return cart;

}

function getCart(){
  return cart;
}

function viewCart(){
  if (cart.length !== 0) {
    var itemAndPrices = [];
    for (var i = 0; i < cart.length; i++) {
      itemAndPrices.push(`${Object.keys(cart[i])[0]} at \$${cart[i][Object.keys(cart[i])[0]]}`)
    }
      console.log(`In your cart, you have ${itemAndPrices.join(', ')}.`);

  } else {
    console.log(`Your shopping cart is empty.`);
  }
}

function removeFromCart(item){
  var found = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      found = true;
    }
  }
  if (!found) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(creditCard){
  if(creditCard){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart.splice(0,cart.length);
    return cart;
  }else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
