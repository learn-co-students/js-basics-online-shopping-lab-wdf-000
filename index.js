var cart;
cart = []

function getCart() {
  return cart;
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

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push({[item]: price})
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  var text = []
  if(cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  } else {
    for (var i in cart) {
     var priceItemCombo = cart[i]
     var item = Object.keys(priceItemCombo)[0]
     var price = priceItemCombo[item]
    text.push(`${item} at \$${price}`)
    }
  }
  console.log(`In your cart, you have ${text.join(', ')}.`)
}

function removeFromCart(itemRemove) {
  var items = []
  for (var i in cart) {
    var priceItemCombo = cart[i]
    var item = Object.keys(priceItemCombo)[0]
    items.push(item)
  }
  var a = items.indexOf(itemRemove);
  if (a >= 0) {
    cart.splice(a,1); 
    return cart
  } else {
    return console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
}
