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
  var price = Math.floor(Math.random() * 100);
  cart.push(item);
  cart[item] = price;
  debugger;
  console.log(`${item} has been added to your cart.`);
  return cart;
}



function addToCart(item) {
   var price = Math.floor(Math.random()*100);
   cart.push({[item]: price});
   console.log(`${item} has been added to your cart.`);
  return cart;
 }



function viewCart() {
   if (cart.length === 0) {
     console.log("Your shopping cart is empty.");
   } else {

     var allItems = [];

   for (var i = 0; i < cart.length; i++) {
    for (var cartItem in cart[i]) {
      allItems.push(`${cartItem} at $${cart[i][cartItem]}`);
      // debugger;
     }
   }
   console.log(`In your cart, you have ${allItems.join(", ")}.`);
 }
 }


//  function removeFromCart(item){
//    for (var x in cart){
//      if (cart[x].hasOwnProperty(item)){
//        cart.splice(x, 1);
//      }
//      else
//      console.log("That item is not in your cart.");
//    }
//   return cart;
// }




function removeFromCart(item) {
   var cartItem = [];

   for (var i = 0, l = cart.length; i < l; i++) {
     debugger;
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
   if (!card){console.log("We don't have a credit card on file for you to place your order.")}
    else{ console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)}
    cart.length = 0
 }
