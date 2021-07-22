//Module Import

// import { addToCart,totalQuantity as tq,tp } from "./shoppingCart.js";
// addToCart("bread",8);
// console.log(tp,tq);

// import * as ShoppingCart from "./shoppingCart.js";

console.log("Module d'import");

// ShoppingCart.addToCart("bread",8);

import add, {cart} from './shoppingCart.js';
add("bread",45);
add("apple",49);
add("pear",15);
add("tomato",25);

console.log(cart);