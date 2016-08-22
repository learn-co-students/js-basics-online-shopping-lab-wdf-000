var cart = [];

function getCart() {
  return cart;
}

function setCart() {
  var cart = [];
  return cart;
}

function addToCart(item) {
  obj = new Object;
  obj[item] = Math.floor(Math.random() * 100);
  cart.push(obj);
  console.log(item + " has been added to your cart.");
  return cart;
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

function viewCart() {
  function viewCart(){
   if (cart.length === 0){
     console.log("Your shopping cart is empty.")
  }
   else {
     var temp = [];
    for(var i = 0; i < cart.length; i++){
     var keys = Object.keys(cart[i])[0]
      temp.push(`${keys} at $${cart[i][keys]}`)
    }
    console.log(`In your cart, you have ${temp.join(', ')}.`)
    return temp
  }
 }
  // finalString = "In your cart, you have ";
  // for (i in cart){
  //   for (item in cart[i]){
  //     finalString += `${item} at ` + "$" + `${cart[i][item]}, `
  //   }
  // }
  // console.log(`${finalString.slice(0, -2)}.`)
}

// function total() {
//   total = 0;
//    for (index in cart){
//      for (item in cart[index]){
//        total += cart[index][item];
//      }
//    }
//    return total;
// }
