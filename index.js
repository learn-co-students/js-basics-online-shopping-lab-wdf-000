var cart = []

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
  var object = {}
  object[item] = Math.floor(Math.random()*100)
  cart.push(object)
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }

  var string = ""

  for (var i=0;i<cart.length;i++) {
    for (var item in cart[i]) {
      if (i === 0) {
      string = string + `In your cart, you have ${item} at $${cart[i][item]}, `
      } else if (i < (cart.length-1)) {
      string = string + `${item} at $${cart[i][item]}, `
    } else{
      string = string + `${item} at $${cart[i][item]}.`
    }

    }
   }
   console.log(string)
}


function removeFromCart(item) {
  delete cart[item]
  var wasThere = false
  for (var i=0;i<cart.length;i++) {
    for (var key in cart[i]) {
    if (key == item) {
      cart.splice(i,1)
      wasThere = true
    }
  }
 }
  if (wasThere == false) {
    console.log("That item is not in your cart.")
  }

}

function placeOrder(creditCard) {
 if (creditCard == null) {
   console.log("We don't have a credit card on file for you to place your order.")
 } else {
   console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
 }
 cart = []
}
