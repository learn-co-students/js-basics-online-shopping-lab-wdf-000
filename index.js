var cart = [];

function getCart(){
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


function addToCart(item){
	function price(){
		return Math.floor(Math.random() * 100)
	}
	// var price = Math.floor(Math.random() * 100)
	cart.push({ [item]: price()})

	console.log(`${item} has been added to your cart.`)

	return cart
}

function viewCart(){

	if (!cart.length){
		console.log("Your shopping cart is empty.")
	}
	
	var itemsAndPrices = []

	for (var i = 0; i < cart.length; i++) {
		let cartItemAndPrice = cart[i]
		let item = Object.keys(cartItemAndPrice)[0]
    	let price = cartItemAndPrice[item]

    	itemsAndPrices.push(`${item} at \$${price}`)
  	}

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)

}

function removeFromCart(item) {
   debugger;
   var cartItem = [];

   for (var i = 0, l = cart.length; i < l; i++) {
     if (cart[i].hasOwnProperty(item)){
       cartItem.push(item);
       cart.splice(i, 1);
     }
   }

   if (!cartItem.length){
     console.log("That item is not in your cart.")
   }
   return cart;
 }

function placeOrder(card){
	if (!card){
		console.log("We don't have a credit card on file for you to place your order.")
	} else {
		console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
	}
	cart.length = 0
}


