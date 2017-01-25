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

function getCart(){
  return cart;
}

function addToCart(item){
  var container = {};
  container[item] = Math.floor(Math.random()*100);
  cart.push(container);
  console.log(`${Object.keys(container)[0]} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var output = "In your cart, you have";
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  } else {
      cart.forEach(function(obj){
        for(var key in obj){
          output += ` ${key} at $${obj[key]},`; 
        }
      });
  }
  var newArray = output.split("");
  newArray.splice(-1, 1, ".");
  output = newArray.join("");
  console.log(output); 
}

function removeFromCart(item){
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
 }

function placeOrder(cardNumber){
  if(cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0, cart.length);
  }
}
   
