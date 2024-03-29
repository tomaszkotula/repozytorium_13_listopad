console.log("Zadanie JS suma Ciągu Fibonacciego");



// function fibonacci(n) {
//     if (n === 0) return 0;
//         else if (n === 1 || n === 2) return 1;
//         else if (n > 2) {
//             var a = 1;
//             var b = 1;
//             var c = 0;
//     for (var i = 0; i < n - 2; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     return c;
// }
// }
console.log("Zadanie JS suma kwadratów tablicy");

const table = [0, 1, 2, 3, 4, 5];

let sum = 0;
let multy = 1;

table.forEach(function (number) {


    // multy = sum + multy;
    console.log("Pierwsza liczba=",multy)
    multy = sum + multy;
    console.log("Kolejna liczba=", multy);
});



console.log("Suma kwadratów=", sum);

