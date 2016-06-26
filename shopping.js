var cart = []

function getCart(){
  return cart;
}

function setCart(arr){
  cart = arr;
}

function addToCart(item){
  var itemObj = {}

  itemObj[item] = Math.floor(Math.random() * 101);

  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart(){
  if (cart.length == 0){
    console.log("Your shopping cart is empty.")

  } else {
    var str = cart.map(i => Object.keys(i)[0] + ' at $' + i[Object.keys(i)[0]]).join(', ');
    console.log(`In your cart, you have ${str}.`)
  }
}

function removeFromCart(item_name){
  var index = null;

  cart.forEach(function(v,i){
    if (v.hasOwnProperty(item_name))
      index = i;
  });

  if (index === null){
    console.log ("That item is not in your cart.");

  } else{
    cart.splice(index,1);
    return cart;
  }
}

function placeOrder(cc){
  if (cc === undefined){
    return console.log("We don't have a credit card on file for you to place your order.");
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
  cart = [];
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
