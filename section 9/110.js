
const prenoms = ["Andre","Pierre","Jean","Marc","Alexandre","Jean","Thomas"];

for(let i = 0; i < prenoms.length ; i++) {
  console.log(i + ". " + prenoms[i]);
}

console.log("------------------------");

// for (const prenom of prenoms) {
//   console.log(prenoms.indexOf(prenom) + ". " + prenom);
// }

console.log("------------------------");

console.log(...prenoms.entries());
console.log("------------------------");

for (const [i,prenom] of prenoms.entries()) {
    console.log(i + ". " + prenom);
  }



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let dette = 10 * (prenoms.length + 1);
  
  // for(let i = prenoms.length; i > 0 ; i--) {
  //   dette -= 10;
  //   console.log("la dette est de " + dette + "€");
  // }













