// for (const [i, v] of ["a", "b", "c"].entries()) {
//   console.log(i, v);
// }
// tester = () => {
//   console.log("State Products :", this.state.products[0].inCart);
//   console.log("Data Products :", storeProducts[0].inCart);

//   const tempProduct = [...this.state.products];
//   tempProduct[0].inCart = true;

//   this.setState(
//     () => {
//       return { products: tempProduct };
//     },
//     () => {
//       console.log("State Products :", this.state.products[0].inCart);
//       console.log("Data Products :", storeProducts[0].inCart);
//     }
//   );
// };
//1. ES7 or ES2016
// const a = [1, 2].includes(4);
// //const a = [1, 2].indexOf(1);
// console.log(a);

//console.log(4 ** 2);

//2.ES8 or ES2017
// const person = { name: "Fred", age: "90" };
// console.log(Object.values(person));

//Rest Operator
// const numbers = [1, 2, 3, 4, 5];
// [first, ...k] = numbers;

// console.log(k);

//Spread operator used to expand an array
// const r = [1, 2, 3];
// const p = [...r, 4, 5, 6];
// console.log(p);

const r = { first: 1, second: 2, third: 3 };
const p = { ...r, fourth: 4, fifth: 5, sixth: 6 };
console.log(p);
