console.log("Zadanie JS suma kwadratów tablicy");


function sumAndSquare (table){
let sum = 0;
let multy = 1;

table.forEach(function (number) {


    multy = Math.pow(number, 2);
    sum = sum + multy;
    
    result = ["Wynik sumy kwadratów=",sum];
    
})


return result;
}


console.log(sumAndSquare(table = [1,2,3]));
console.log(sumAndSquare(table = [1,2,3,4]));
console.log(sumAndSquare(table = [1,2,3,4,5]));
console.log(sumAndSquare(table = [1,2,3,4,5,6]));