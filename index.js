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
  return cart
}

function addToCart(item) {
  var cartitems = {}
  cartitems[item] = generateRandom()
  cart.push(cartitems)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function generateRandom() {
  return Math.floor(Math.random()*100)
}

function viewCart() {
  var msg = "In your cart, you have"
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for(var i in cart) {
      var item = cart[i]
      var itemName = Object.keys(item)[0]
      var price = item[itemName]
      msg += ` ${itemName} at $${price},`
    }
    var final = msg.substring(0, msg.length-1) + "."

    console.log(final)

  }
}


function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}


function placeOrder(creditCard) {
  if(creditCard === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
    cart.splice(0, cart.length)
  }


}
