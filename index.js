var cart;

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

var cart = [];

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 10) + 1;
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
  } else {

    var pairs = []
      for (var i in cart) {
        var item = Object.keys(cart[i])[0]
        var price = cart[i][item]
          pairs.push(`${item} at $${price}`)

      }
    console.log(`In your cart, you have ${pairs.join(", ")}.`)
  }
}

function removeFromCart(item) {
   let itemInCart = false
      // debugger;
    for (var i = 0, l = cart.length; i < l; i++) {
      if (cart[i].hasOwnProperty(item)) {
        itemInCart = true
        var removed = cart.splice(i, 1)
     }
     }
     if (!itemInCart) {
       console.log("That item is not in your cart.")
     }
    return cart
}

function placeOrder(creditCard) {
  if (!creditCard) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    const t = total()
    console.log(`Your total cost is $${t}, which will be charged to the card ${creditCard}.`)
    cart = []
  }
}
