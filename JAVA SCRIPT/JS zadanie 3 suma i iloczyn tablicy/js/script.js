console.log("Zadanie JS suma i iloczyn tablicy");

function sumMulty (table){
let sum = 0;
let multy = 1;

table.forEach(function(number) {

sum = sum + number;
multy = multy * number;
result = ["Suma= ",sum,"Iloczyn= ", multy]
})
return result

}
console.log(sumMulty(table = [1,2,3,4]));
console.log(sumMulty(table = [1,2,3,4,5,6]));