var cart = []



function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  var object = {};
  object[item] = Math.floor(Math.random()*100)
  cart.push(object)
  console.log(`${item} has been added to your cart.`);
  return cart;

}



function viewCart(){
  if (cart.length == 0){
    console.log("Your shopping cart is empty.")
  }else{
    for(var object in cart){
      console.log(`In your cart, you have socks at ${object} at $${object[price]}`)
    }
  }

}

function viewCart(){

  var string = ""
  var i = 0;
  if (cart.length == 0){
    console.log("Your shopping cart is empty.")
  }else{
    for(i; i< cart.length; i++){
      for(var key in cart[i]){
        if (i ==0){
          string = string +`In your cart, you have ${key} at $${cart[i][key]},`
        }else if(i<(cart.length-1)){
          string = string + ` ${key} at $${cart[i][key]},`
        }else{
          string = string + ` ${key} at $${cart[i][key]}.`
        }

      }
    }

  }
  console.log(string);
}

// function viewCart(){
//   var arr = ["In your cart, you have"]
//   var i = 0;
//   if (cart.length == 0){
//     console.log("Your shopping cart is empty.")
//   }else{
//     for(i; i< cart.length; i++){
//       for(var key in cart[i]){
//         arr.push(` ${key} at $${cart[i][key]}`)
//       }
//     }
//
//   }
//
//
//   //  var s =  arr.toString();
//    var str1 = arr.toString().replace(/.$/,".");
//    console.log(str1);
//
// }

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


function removeFromCart(item){
  var i = 0;
  var exist = false;
  for(i; i < cart.length; i++){
    for (var thing in cart[i]){
      if (thing == item){
        cart.splice(i,1)
        exist = true;
      }else{
        exist = false;
      }
    }
  }
  if (exist == false){
    console.log("That item is not in your cart.")
  }
}

function placeOrder(number){
  if(number){
    console.log(`Your total cost is $${total()}, which will be charged to the card 123.`)
    cart.splice(0,cart.length)
  }else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
