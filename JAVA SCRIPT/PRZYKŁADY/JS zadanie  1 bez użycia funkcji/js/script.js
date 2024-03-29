console.log("Zadanie JS numer 1");

const namesAkademia108 = "Akademia108";
console.log(namesAkademia108);
// Podaje długość tekstu w postaci ilości znaków
console.log(namesAkademia108.length);
// Rozdziela tekst na poszczególne znaki w ""
const table = [...namesAkademia108];
// Edytuje tekst rozdzielony w oryginalnej kolejności
console.log(table);

// Odwraca kolejność liter w tablicy
let reverseTable = table.reverse();
// Edytuje odwrócony ciąg znaków
console.log(reverseTable);
// Łączy poszczególne litery w ciąg znaków
console.log(reverseTable.join(""));