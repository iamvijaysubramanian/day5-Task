// Programs in different functions//

// anonnymus function use to print odd no in array

// var array= [1,2,3,4,5,6,7,8,9,10];
// var odd = function (){
//     var result = array.filter(number => number%2!=0)
//     return result;
// }
// console.log(odd());

// // IIFE function in array to print odd number

// (function odd(){
//     for(var i=0; i<array.length; i++){
//         if (array[i]%2!=0)
//         console.log(array[i])
//     }
// })
// ();

// // print odd in array using arrow function

// var oddNumber = ()=>{
//     var result = array.filter(number => number%2!=0)
//     return result;
//     }
// console.log(odd());

// convert all the strings to title caps in a string array: doubt in this

// sum of all Numbers

// var myNumbers = [1,2,3,4,5,6,7,8,9,10]
//     var total=0;
//     for(var i = 0; i < myNumbers.length; i++){
//         total += myNumbers[i];
//     }
//     console.log(total);



//return prime num in an array using arrow function

// const newArray = [1, 3, 2, 5, 10];
// const myPrimeArray = newArray.filter(num => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num !== 1;
// });
// console.log(myPrimeArray);


// return palindrome using arrow functions

// const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);
// console.log(getAllPalindromes(["hello", "noon"]));


// convert string to titlecaps using arrow funtion

// const str = "my name is vijay subramanian";
// const newStr = str.split(' ')
//    .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
//    .join(' ');
// console.log(newStr);


// Remove the duplicates using iife function

// let characters=['a','b','c','d','b','a','c'];
// let unique=characters.filter((c,index)=>{
//     return characters.indexOf(c)=== index;
// });
// console.log(unique);


//Rotate the words to left and right


// const words=['game','play','fun','sports','athletic']
// words.unshift(words.pop());
// console.log(words)