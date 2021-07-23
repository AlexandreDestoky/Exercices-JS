//Module Import

// import { addToCart,totalQuantity as tq,tp } from "./shoppingCart.js";
// addToCart("bread",8);
// console.log(tp,tq);

// import * as ShoppingCart from "./shoppingCart.js";

console.log("Module d'import");

// ShoppingCart.addToCart("bread",8);

import add, { cart } from "./shoppingCart.js";
add("bread", 45);
add("apple", 49);
add("pear", 15);
add("tomato", 25);

console.log(cart);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  }
})();


ShoppingCart2.addToCart("banana",24);
ShoppingCart2.addToCart("cherry",4);
console.log(ShoppingCart2.shippingCost);

//Export Modules en Node JS mais pas utile en JS