var cart; [];


function getCart() {
  return cart;
}




function addToCart(item) {

 var price = Math.floor(Math.random() * 101);

 // var the_item = { item: price};

 cart.push({[`${item}`]: price});
 // cart.push(the_item);

 // debugger;

 console.log(`${item} has been added to your cart.`);

 return cart;

}


function viewCart() {

  if (cart.length === 0) {
      console.log("Your shopping cart is empty.")
    }

  else {
      var output = ["In your cart, you have"];

      var itemNames = Object.keys(cart);

      for (var i = 0, l = itemNames.length; i < l; i++) {
          output.push(Object.keys(cart[i])[0] + ` at $${Object.keys(cart[i]).map(function(key){return cart[i][key]})[0]},` )
          // output.push(`${itemNames[i]} at ${cart[itemNames[i]]}`)
        }
        // debugger;
        console.log(output.join(" ").slice(0, -1) + ".");
    }
}


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


function removeFromCart(name) {
  for (var i = 0, l = cart.length; i < l; i++) {

      if (Object.keys(cart[i])[0] == name) {
        cart.splice(Object.keys(cart[i])[0], 1);
        return cart
      }

    }

  console.log("That item is not in your cart.")
}


function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    // debugger;
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

    cart.length = 0;

  }

}
